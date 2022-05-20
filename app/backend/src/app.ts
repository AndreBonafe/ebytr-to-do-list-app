import * as express from 'express';
import TaskRouter from './routes/TaskRouter';

class App {
  public app: express.Express = express();

  constructor() {
    this.config();
  }

  private config(): void {
    const acessControll: express.RequestHandler = (_req, res, next) => {
      res.header('Acess-Controll-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(acessControll);
    this.app.use('/tasks', TaskRouter);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT);
    console.log(`listening on port ${PORT}`);
  }
}

export default App;