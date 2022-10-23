const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port =  process.env.PORT || 3000;
    this.middlewares();
    this.routes();
    dbConnection();
  }

  routes() {
    this.app.use('/api/CR', require('../routes/costaRica'));
    this.app.use('/api/GT', require('../routes/guatemala'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }

  middlewares () {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
}



module.exports = Server;
