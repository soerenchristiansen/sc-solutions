const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
// const cons = require('consolidate');

express()
  .use(express.static(path.join(__dirname, 'images')))
  // .engine('html', cons.swig)
  .set('views', path.join(__dirname, 'app'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))