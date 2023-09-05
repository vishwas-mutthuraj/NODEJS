const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/',(req,res)=> {
  // res.json([{ name:'john' }, { name: 'susan' }])
  res.json(products)
})
app.listen(5000, () => {
  console.log('server is listening to th port 5000...');
})