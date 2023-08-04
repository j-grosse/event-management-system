require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();

const connectDB = require('./config/db'); // MongoDB ATLAS database connection config file
const usersRouter = require('./routes/users');

const PORT = process.env.PORT || 8000; // PORT on localhost is only needed in case you want to create and work with a local database instead of the one deployed on https://evento-s5rx.onrender.com which is connecting to the database in the cloud on on MongoDB Atlas https://www.mongodb.com/atlas/database via the MONGODB_ATLAS_CONNECTION_STRING in the file /server/.env
const path = require('path');
app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
// DEPLOYMENT
// this need to be after all routes
if (process.env.NODE_ENV === 'production') {
  // Set up a static folder in production
  const buildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(buildPath));

  app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
}
connectDB().then(() => {
  app.listen(PORT, () => console.log('🚀 ~ file: index.js:22 ~ PORT:', PORT));
});
