import { AppDataSource } from './data-source';
import * as express from 'express';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import { userRouter } from './routes/user.routes';
import { bookRouter } from './routes/book.routes';
import { errorHandler } from './middleware/error.middleware';
import 'reflect-metadata';
import { tagRouter } from './routes/tag.routes';
import { orderRouter } from './routes/order.routes';
import * as cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(errorHandler);
app.use(cors());
const { PORT = 3000 } = process.env;
app.use('/auth', userRouter);
app.use('/api', bookRouter);
app.use('/api', tagRouter);
app.use('/api', orderRouter);

app.get('*', (req: Request, res: Response) => {
  res.status(505).json({ message: 'Bad Request' });
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log('Server is running on http://localhost:' + PORT);
    });
    console.log('Data Source has been initialized!');
  })
  .catch((error) => console.log(error));
