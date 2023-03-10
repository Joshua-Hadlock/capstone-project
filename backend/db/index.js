const Pool = require('pg').Pool;
require('dotenv').config()
let dbURL = {
    connectionString: process.env.DATABASE_URL  || 'postgres://postgres:Postgres@localhost:5432/postgres'
}   

const pool = new Pool(dbURL);

pool.connect();


exports.getAllUsers = async (req, res) => {
    pool.query(`SELECT * from users limit 3`, (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    })
}

exports.findClass = async (req, res) => {
    pool.query(`SELECT * from courses where title ilike $1`, [`%${req.body.searchClassName}%`], (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    })
}

exports.authUserByName = async (username) => {
    const results = await
        pool.query('SELECT * from users where username = $1', [username])
    console.log(results.rows[0])
    return results.rows[0];
}

exports.getUserById = async (id) => {
    const results = await pool.query(`select * from users where id = $1`, [id])

        return results.rows[0]

}
exports.getLoginUser = async (req, res) => {
    pool.query(`select * from users where id = $1`, [res.locals.user.id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows[0]);
    })
}

exports.register = async (req, res) => {
    pool.query(`insert into users (username, password, email, phone, address) values ($1, $2, $3, $4, $5)`, [req.body.username, req.body.password, req.body.email, req.body.phone, req.body.address], (err) => {
        if (err) throw err;
    })
}

exports.getAllClasses = async (req, res) => {
    pool.query(`select * from courses`, (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
        }
        res.status(200).json(results.rows);
    })
}

exports.getOneClass = async (req, res) => {
    pool.query(`select * from courses where id = $1`, [req.body.selectedOneCourse], (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
        }
        res.status(200).json(results.rows);
    })
}



exports.requestAddableClasses = async (req, res) => {
    pool.query(`select *, case when users_courses.cnt is null then 0 else users_courses.cnt end as cnt2 into tempCourses from courses
    left join(select courses_id, COUNT(courses_id) as cnt from user_course Group By courses_id) as users_courses on courses.id = users_courses.courses_id;` , (err) => {
        if (err) throw err;
        pool.query(`ALTER TABLE tempCourses
    DROP COLUMN cnt;`, (err) => {
        if (err) throw err;
        pool.query(`
    select * from tempCourses
    where id not in (select courses_id from user_course where users_id = $1) and maximum_capacity > cnt2;`, [res.locals.user.id], (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        pool.query(`drop table tempCourses`);
        res.status(200).json(results.rows);
    })
    })
    })
    
    
    
}

exports.addStudentClass = async (req, res) => {
    const currentClassCapacityQuery = await pool.query(`select count(*) from user_course where courses_id = $1`, [req.body.selectedClass])
    const classCapacityQuery = await pool.query(`select maximum_capacity from courses where id = $1`, [req.body.selectedClass])
    const currentClassCapacity = currentClassCapacityQuery.rows[0].count;
    const classCapacity = classCapacityQuery.rows[0].maximum_capacity;


    if (currentClassCapacity < classCapacity) {
        pool.query(`insert into user_course (courses_id, users_id, credits, cost)

        values
        ((select id from courses where id = $1), (select id from users where id = $2), (select credit_hours from courses where id = $1), (select tuition_cost from courses where id = $1))
        `, [req.body.selectedClass, res.locals.user.id], (err, results) => {
        if (err) throw err;
        return('oof')
    })
    }
}

exports.removeStudentClass = async (req, res) => {
    pool.query(`delete from user_course where courses_id = $1 and users_id = $2`, [req.body.selectedClass, res.locals.user.id], (err) => {
        if (err) throw err;
    })
}

exports.getAllYourClasses = async (req, res) => {
    pool.query(`select * from courses where id in (select courses_id from user_course where users_id = $1)`, [res.locals.user.id], (err, results) => {
        if (err) throw err;
        console.log(results.rows)
        res.status(200).json(results.rows);
    })
}

exports.createClass = async (req, res) => {
    const data = req.body;
    pool.query(`insert into days_time (courses_id, schedule, classroom_number) values ($1, $2, $3)`, [data.id, data.schedule, data.classroom_number], (err) => {
        if (err) throw err;
    })
    pool.query(`insert into courses (id, title, description, schedule, classroom_number, maximum_capacity, credit_hours, tuition_cost) values ($1, $2, $3, $4, $5, $6, $7, $8)`, [data.id, data.title, data.description, data.schedule, data.classroom_number, data.maximum_capacity, data.credit_hours, data.tution_cost], (err) => {
        if (err) throw err;
    })
}

exports.deleteClass = async (req, res) => {
    pool.query(`delete from user_course where courses_id = $1`, [req.body.selectedClass], (err) => {
        if (err) throw err;
    })
    pool.query(`delete from courses where id = $1`, [req.body.selectedClass], (err) => {
        if (err) throw err;
    })
}