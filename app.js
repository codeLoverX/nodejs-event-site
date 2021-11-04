// import modules
const express = require('express')
const methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// configure app
const app = express()
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(methodOverride('_method'))
const models = require('./db/models');

// const { connectDB } = require('./db');
// const { resetData } = require('./seeder');
const eventController = require('./controllers/event')
const rsvpsController = require('./controllers/rsvps')

// Use "main" as our default layout
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Use handlebars to render
eventController(app, models);
rsvpsController(app, models);


// const port = process.env.PORT;
app.listen(process.env.PORT || 3001 , () => {
  console.log('App listening on port 3001!')
})