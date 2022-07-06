const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
// make express app
const app = express();
// port to work locally or with heroku
const PORT = process.env.PORT || 3001;
// middleware for dealing with json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
