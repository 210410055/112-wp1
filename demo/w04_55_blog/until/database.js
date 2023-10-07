const { Pool } = require('pg');

let pool;

pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'wp1_demo_55',
    password: '0000'
});

// console.log(`connect database`,pool.options);



const testDB = async () => {
    try {
        const results = await pool.query(`select * from card_55`);
        console.log('json data',results.rows);   
    } catch (error) {
        console.log(error);
    }
};

testDB();

module.exports = pool;
