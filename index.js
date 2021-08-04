
const express = require('express')
const app = express()
const path=require('path')
const port = 3000
/*------------------------------------------------------------------------*/
/*Serving a folder on request */
app.use(express.static(path.join(__dirname, "public")))
/*------------------------------------------------------------------------*/
/*A get request for the home page */
app.get('/', (req, res) => {
  res.send('Hello World!')
})
/*------------------------------------------------------------------------*/
/*Serving static html file on a request */
app.get('/file', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname,'page1.html'))
})
/*------------------------------------------------------------------------*/
/*Buiding Custom Middlewares */
const custMiddleware = (req, res, next)=>{
  console.log(req)
  next()
}
app.use(custMiddleware);
/*------------------------------------------------------------------------*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
