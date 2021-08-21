import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }
  private PORT: number = 8000;

  private setMiddleware() {
    this.app.use((req, res, next) => {
      //전체사용시 use() 사용 next사용시 미들웨어됌
      console.log(req.rawHeaders[1]);
      next();
    });

    //* json middle ware
    this.app.use(express.json());

    //특정 라우터에 미들웨어 사용시
    this.app.get("/", (req, res, next) => {
      console.log("특정 미들웨어 사용");
      next();
    });
    this.setRoute();

    //404 middleware
    this.app.use((req, res, next) => {
      console.log("404");
      res.status(404).send({
        error: "404 not found",
      });
    });
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(this.PORT, () => {
      console.log(`${this.PORT}포트 서버 온`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
