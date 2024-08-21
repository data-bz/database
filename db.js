const Pool = require('pg').Pool;
const pool = new Pool({
    user: "astrolog", 
    password: "astRlGGpsswrd",
    host: "185.179.189.185",
    port: "5432",
    database: "astrologydb",
})
module.exports = pool
