const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const database = require('mysql');

const add = express();
add.use(cors());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static('public'));

let a = database.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "shopify"
    }
)

a.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Database Connected Successfully");
    }
}
)

add.post('/AddProduct', (request, response) => {
    let { id, name, brand, gender, category, price, items_left, imageURL } = request.body;
    let sql = 'insert into product(id,name,brand,gender,category,price,items_left,imageURL) values (?,?,?,?,?,?,?,?)';
    a.query(sql, [id, name, brand, gender, category, price, items_left, imageURL], (error, result) => {
        if (error) {
            let s = { "status": "error in adding" }
            response.send(s);
        }
        else {
            let s = { "status": "success" }
            response.send(s);
        }
    })
})
add.get('/MenProduct', (request, response) => {
    let id = request.params.id;
    let sql = 'select * from Menproduct';
    a.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})
add.get('/WomenProduct', (request, response) => {
    let id = request.params.id;
    let sql = 'select * from Womenproduct';
    a.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})
add.get('/KidProduct', (request, response) => {
    let id = request.params.id;
    let sql = 'select * from KidsProduct';
    a.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})
add.get('/PerfumeProduct', (request, response) => {
    let id = request.params.id;
    let sql = 'select * from PerfumeProduct';
    a.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})
add.get('/WatchProduct', (request, response) => {
    let id = request.params.id;
    let sql = 'select * from WatchProduct';
    a.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})
add.get('/CosmeticProduct', (request, response) => {
    let id = request.params.id;
    let sql = 'select * from CosmeticProduct';
    a.query(sql, [id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})


add.listen(2500, () => { console.log("Server running on 2500") });
