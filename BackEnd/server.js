const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
app.use(bodyParser = requires("body-parser")

//allows cors to be used each time 
app.use (cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    

    app.use(bodyParser.urlencodded({extended: false}))

    app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//adding new route point
app.get('/api/movies', (req, res)=>{

    const mymovies = [
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}

    ];       
    res.status(200).json({
        message: "everything is okay",
        movies:mymovies});
    //passes down message

})

// listens at post 
app.post('/api/movies', (req, res)=>{
    console.log('movie recieved');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
    //pulls title, year and poster out of the body using the middleware


})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})