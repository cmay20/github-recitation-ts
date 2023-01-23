// Endpoint for querying the fibonacci numbers

import {fibonacci} from "./fib";

import {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  const { num } = req.params;
  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;
  if (fibN < 0) {
        result = `fibonacci(${num}) is undefined`;
  }
  res.send(result);
});

// export default (req, res) => {
//   const { num } = req.params;

//   const fibN = fibonacci(parseInt(num));
//   let result = `fibonacci(${num}) is ${fibN}`;

//   if (fibN < 0) {
//     result = `fibonacci(${num}) is undefined`;
//   }

//   res.send(result);
// };
