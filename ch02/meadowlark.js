
const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const fortune = require('./lib/fortune')
const cookieParser = requ('cookie-parser')
const credentials = require('./.credential.development')

app.use(cookieParser(credentials.cookieSecret))

app.disable('x-powered-by')

app.engine('handlebars', expressHandlebars({
    defaultLayout:'main',
}))

app.get('/headers',(req,res)=>{
res.type('text/plain')
const headers = Object.entries(req.headers).map(([key,value]) =>`${key}:${value}`)
res.send(headers.join('\n'))
})

app.use(express.static(__dirname+'/public'))
app.set('view engine', 'handlebars')
app.set('views',__dirname + '\\views')

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/join', (req,res)=>{
    res.render('join', {fortune:fortune.getFortune()})
})

app.use((req,res)=> {
    res.status(404)
    res.render('404')
})

app.use((err,req,res,next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, ()=>{
    console.log('Express started')
})