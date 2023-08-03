require('dotenv/config');
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');
const PORT = process.env.PORT || 8000;
const path = require('path');
app.use(cors());
app.use(express.json());
app.use('/api/books', booksRouter);
// DEPLOYMENT
// this need to be after all routes
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  const buildPath = path.join(__dirname, '../client/dist');
  app.use(express.static(buildPath));

  app.get('*', (req, res) => res.sendFile(path.join(buildPath, 'index.html')));
}
connectDB().then(() => {
  app.listen(PORT, () => console.log('🚀 ~ file: index.js:11 ~ PORT:', PORT));
});
