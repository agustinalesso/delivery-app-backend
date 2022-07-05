require('express');

const RequestController = (req = Request,res = Response,next) => {
  const fecha = new Date();
  console.log('Incoming request |',req.originalUrl,fecha,'Method',req.method);
  next();
}

module.exports = RequestController;