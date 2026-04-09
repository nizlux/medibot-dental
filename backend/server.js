import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'MediBot Backend Running' });
});

app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
