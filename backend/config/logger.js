const winston = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, json} = winston.format;

var transport = new winston.transports.DailyRotateFile({
    filename: `${__dirname}/../logs/server%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    maxSize: '20m',
    maxFiles: '14d',
});

transport.on('rotate', function(oldFilename, newFilename) {

})

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    format: combine(timestamp({
        format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }), json()),
    transports: [
        new winston.transports.Console(),
        transport
    ]
});

// const logger = winston.createLogger({
//     level: process.env.LOG_LEVEL || 'debug',
//     format: combine(timestamp({
//         format: 'YYYY-MM-DD hh:mm:ss.SSS A',
//     }), json()),
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({
//             filename: `${__dirname}/../logs/server.log`,

//         })
//     ]
// })

module.exports = logger;