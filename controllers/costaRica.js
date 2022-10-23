const CRSchema = require('../models/costaRica');

  const getCR = (req, res) => {
    CRSchema.find().then((data) => {
      res.status(200).json({
        ok: true,
        data
      });
    }).catch((err) => {
      res.status(400).json({
        ok: false,
        err
      });
    });   
  }

  const postCR= (req, res) => {

    const FechaCierre = new Date();
    const {codigo, nombre_proyecto, pais_ejecuta,  } = req.body;

    const newProyecto = new CRSchema({codigo, nombre_proyecto, pais_ejecuta, FechaCierre});

    newProyecto.save().then((data) => {
      res.status(201).json({
        ok: true,
        data
      });
    }).catch((err) => {
      res.status(400).json({
        ok: false,
        err
      });
    });
  }

  module.exports = {
    getCR,
    postCR
}