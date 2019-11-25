var app = require('express')();
var http = require('http').createServer(app);
const bodyParser = require('body-parser')
var io = require('socket.io')(http);

// var jwt = require('jsonwebtoken');
// var jwtHandler = require('./middlewares/jwt');

const dotenv = require('dotenv');
dotenv.config();

// const { verifyJWT } = jwtHandler(jwt);

console.log(process.env.LOG);

io.on('connection', (socket) => {
    console.log(`socket id: ${socker.id}`);

    console.log('a user connected');
});

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// app.get('/foo', verifyJWT, (req,res) => {
//     res.json({
//         message = 'hello world'
//     });
// });

http.listen(3100, () => {
    console.log('listening on *:3000');
});