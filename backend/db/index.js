const Pool = require('pg').Pool;

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
    pool.query(`insert into users (username, password) values ($1, $2)`, [req.body.username, req.body.password], (err) => {
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
    console.log(res.locals.user.id)
    pool.query(`insert into user_course (courses_id, users_id)

    values
    ((select id from courses where id = $1), (select id from users where id = $2))`, [req.body.selectedClass, res.locals.user.id])
}