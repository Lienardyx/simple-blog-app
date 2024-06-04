//connection

const { Client } = require("pg");
const client = new Client({
    user: 'postgres',
    password: 'Ryopro1',
    host: 'localhost',
    port: 5432,
    database: 'blogdb',
  })

 
async function check(){
    await client.connect()
    // const res = await client.query('SELECT * from blogs')
    // console.log(res.rows[0]) 
    // await client.end()
}

check();
module.exports = client;