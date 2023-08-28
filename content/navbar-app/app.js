// console.log('Express tutorial');
const http = require('http');
const { readFileSync } = require('fs')

//get all files
const homepage = readFileSync('./index.html')
const homeStyles = readFileSync('./styles.css')
const homeImage = readFileSync('./logo.svg')
const homeLogic = readFileSync('./browser-app.js')


const server = http.createServer((req, res) => {
    // console.log('user hit the server');
    // res.end('home page')
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url
    //home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        // res.write('<h1>home page</h1>')
        res.write(homepage)
        res.end()
    }
   //about page
   else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write('<h1>about page</h1>')
    res.end()
}
//styles
else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css'})
    res.write(homeStyles)
    res.end()
}
//image/logo
else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
}
//logic
else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
}
//404 page not found
else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
}
})
server.listen(5000);