const Pool = require('pg').Pool;
require('dotenv').config()
let dbURL = {
    connectionString: process.env.DATABASE_URL  || 'postgres://postgres:postgres@localhost:5432/postgres'
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
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    })
}

exports.addStudentClass = async (req, res) => {
    const currentClassCapacityQuery = await pool.query(`select count(*) from user_course where courses_id = $1`, [req.body.selectedClass])
    const classCapacityQuery = await pool.query(`select maximum_capacity from courses where id = $1`, [req.body.selectedClass])
    const currentClassCapacity = currentClassCapacityQuery.rows[0].count;
    const classCapacity = classCapacityQuery.rows[0].maximum_capacity;
    console.log(currentClassCapacity)
    console.log(classCapacity)


    if (currentClassCapacity < classCapacity) {
        pool.query(`insert into user_course (courses_id, users_id)

    values
    ((select id from courses where id = $1), (select id from users where id = $2))`, [req.body.selectedClass, res.locals.user.id])
    }
}

exports.getAllYourClasses = async (req, res) => {
    pool.query(`select title from courses where id in (select courses_id from user_course where users_id = $1)`, [res.locals.user.id], (err, results) => {
        if (err) throw err;
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