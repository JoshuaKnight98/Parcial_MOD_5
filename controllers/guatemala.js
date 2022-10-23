
const GTSchema = require('../models/guatemala');


  const getGua = (req, res) => {
    GTSchema.find().then((data) => {
      res.status(200).json({
        ok: true,
        data,
        name : "Josue Emanuel Lopez Zamora"
      });
    }).catch((err) => {
      res.status(400).json({
        ok: false,
        err
      });
    });   
  }

  const postGua = (req, res) => {

    const fecha = new Date();
    const {codigo, nombre_proyecto, monto} = req.body;

    const newProyecto = new GTSchema({codigo, nombre_proyecto, monto, fecha});

    newProyecto.save().then((data) => {
      res.status(201).json({
        ok: true,
        data,
        name : "Josue Emanuel Lopez Zamora"
      });
    }
    ).catch((err) => {
      res.status(400).json({
        ok: false,
        err
      });
    }
    );
  }



  module.exports = {
    getGua,
    postGua
}