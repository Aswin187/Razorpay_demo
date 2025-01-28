import connectDB from './database/db.js';
import express from 'express';
import cors from 'cors';
import payment from './routes/payment.js';


connectDB();
const app = express();
const PORT = 5000;


//middleware
app.use(express.json());
app.use(cors());


//routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/payment', payment);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});