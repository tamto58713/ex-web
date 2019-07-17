const express = require('express')
const bodyParser = require('body-parser')

const adminRoute = require('./routers/adminRoute')
const userRoute = require('./routers/userRoute')

const app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render("", {isAdmin: false, isUser: false});

})
app.get('/about', (req, res) => {
    res.render("about", {isAdmin: false, isUser: false});

})

app.use('/admin', adminRoute)
app.use('/user', userRoute)

app.listen(port, () => {
    console.log("App listening on port " + port)
})

