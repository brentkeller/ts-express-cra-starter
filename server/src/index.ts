import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import MoviesApi from './api/MoviesApi';

const app = express();
const moviesApi = new MoviesApi();

app.use(bodyParser.json());

app.post('/movies', (req: express.Request, res: express.Response) => {
  res.json(moviesApi.create(req.body));
});

app.get('/movies', (req: express.Request, res: express.Response) => {
  res.json(moviesApi.findMany());
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
