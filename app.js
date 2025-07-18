require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const friendsRouter = require('./routes/friends-schedules');
const groupRouter   = require('./routes/group-notifications');
var usersRouter = require('./routes/users');
var app = express();
const {swaggerUi, specs} = require('./swagger/swagger');

const port = 3000;

const swaggerUiDist = require('swagger-ui-dist').absolutePath();


// app.get('/',(req, res) => {
//   res.send('hello from Ec2!');
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/friends-schedules', friendsRouter);
app.use('/api/group-notifications', groupRouter);
app.use('/swagger', express.static(swaggerUiDist));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port,() => {
  console.log('진행중');
  console.log(`server is running on http://localhost:${port}`);
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/ping', (req, res) => {
  res.send('pong');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//데이터 삽입
app.post('/insert', (req, res) => {
  const {name, email, password} = req.body;
  pool.query('INSERT INTO public."Admin" (name, email, password) VALUES ($1, $2, $3)', [name, email, password], (err, result) => {
    if(err){
      console.log(err);
      res.status(500).json({error: '데이터베이스 연결 실패'});
    } else {
      res.status(201).json({message: '사용자 생성 성공'});
    }
  });
});

module.exports = app;
