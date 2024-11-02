import express from 'express';
import mongoose from 'mongoose';

// express app setup
const app = express();
app.listen(3000, () => console.log('Server running on port 3000'));

// connect to MongoDB
const dbName = 'jetblue_ke';
const dbUser = 'smith_jetblue';
const dbPass = 'Kennah820';

// Corrected database connection string
const dbURI = `mongodb+srv://${dbUser}:${dbPass}@backend-tuts.qhw9np2.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database successfully!');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
