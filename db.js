const Pool = require('pg').Pool;
const pool = new Pool({
    user: "astrolog", 
    password: "mypass",
    host: "5.35.82.254",
    port: "5432",
    database: "astrologydb",
})
module.exports = pool
