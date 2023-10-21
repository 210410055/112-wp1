// const db = require('./database');
import db from

console.log('connect database', pool.options);

const testDB = async () => {
    try{
       const result = await pool.query(`select * from card_55`);
       console.log('json date' , JSON.stringify(result.rows));
    }catch(error){
        console.log(error);
    }
}

testDB();

module.exports = testDB;