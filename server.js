var
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    logger = require('morgan'),
    path = require('path'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./app/routes/api');

mongoose.connect('mongodb://ga:ga@ds037165.mongolab.com:37165/js-library-project', function(err){
    if(err) throw err
    console.log('connected to MongoDB')
})

// app middleware
app.use(logger('dev'))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req,res){
    res.send('Hi!')
})
app.use('/api', apiRoutes)

app.get('*', function(req,res){
	res.sendFile(path.join(__dirname + '/public/app/index.html'))
})

app.listen(3030)  //process.env.PORT, function(err){
    console.log('Listening on port 3030' )//process.env.PORT)
// })
