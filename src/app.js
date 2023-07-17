const express = require('express');
const {sayHello, 
      uppercase, 
      lowercase, 
      firstCharacter, 
      firstCharacters,
    } = require('./lib/strings');


const app = express();

app.get('/strings/hello/:string', (req, res) => {
  return res.status(200).json({ result: sayHello(req.params.string)});
});

app.get('/strings/upper/:string', (req, res) => {
  return res.status(200).json({ result: uppercase(req.params.string)});
});

app.get('/strings/lower/:string', (req, res) => {
  return res.status(200).json({ result: lowercase(req.params.string)});
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { length } = req.query;
  const { string } = req.params;
  if (length) {
    return res.status(200).json({ result: firstCharacters(string, length) });
  } else {
    return res.status(200).json({ result: firstCharacter(string) });
  }
});


module.exports = app;
