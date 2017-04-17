var express = require('express');
var Films = require('../client/src/models/films')

var filmRouter = new express.Router();

//get the array of films
var films = new Films();


filmRouter.get('/', function(req, res){
res.json(films);
}) 

//SHOW
filmRouter.get('/:id', function(req,res){
  res.json(films[req.params.id])
})

//UPDATE
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body
  res.json(films);
})

//CREATE
filmRouter.post('/', function(req, res){
  films.push(req.body);
  res.json(films);
})

//DELETE
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
})


module.exports = filmRouter;