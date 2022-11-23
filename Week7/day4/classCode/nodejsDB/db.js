// we opened folder and db.js file
// init npm, intalled nodemone and knex.js and pg
// copied this code from knex and changed it acoording to our pg details.
// the details is right click on postsql15 (under 'server' on the pg)

const knex = require('knex');
    const db = knex({
    client: 'pg',
//    version: '7.2', we can delete this
    connection: {
      host : '127.0.0.1', //this is the ip of your local host.
      port : 5432,
      user : 'postgres',
      password : 'HZ76057605',
      database : 'NODE'
    }
  });


// conect database with raw method (raw is Knex.js method)
// when we import the data base, it not imporing only the table, it imports an object with the db detailes
// that one of them is the "rows" - our table.
  db.raw('select * from products') //thats return promise
.then(res => {          //so we need a then
    console.log(res.rows); // we need the .rows after the response, becuse the res is an object that inside we have tha table.
})
.catch(e => {           // and a catch  
    console.log(e);
})



// select from the table
// one way
    // db
    // .select('id', 'name', 'price')
    // .from('products') //this returns a promise!
    // .then(data => {          //so we need a then
    //     console.log(data);
    // })
    // .catch(e => {           // and a catch  
    //     console.log(e);
    // })


// another way = 
db('products')                          // Ill get a promise
.select('id', 'name', 'price')
.where({id:2})                          // a where inside 
.orWhere({id:3})                        // orWhere
.then(data => {                         //so we need a then
    console.log(data);
})
.catch(e => {           // and a catch  
    console.log(e);
})


// On elephent we created an instance 


const knex = require('knex');
    const db = knex({
    client: 'pg',
//    version: '7.2', we can delete this
    connection: {
      host : 'lucky.db.elephantsql.com', //this is the ip of your local host.
      port : 5432,
      user : 'xwbwxmpk',
      password : 'onoe6uDiffe68RdCkBBmwC1bFG6UqzMn',
      database : 'xwbwxmpk'
    }
  });
  db('products')                          // Ill get a promise
.select('id', 'name', 'price')
.then(data => {                         //so we need a then
    console.log(data);
})
.catch(e => {           // and a catch  
    console.log(e);
})
