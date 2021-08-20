import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

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

    //404 middleware
    this.app.use((req, res, next) => {
      console.log("404");
      res.status(400).send({
        error: "404 not found",
      });'
    });
  }

  private setRoute() {
    this.app.use(catsRouter);
  }
}

const app: express.Express = express();

const port: number = 8000;
//미들웨어 사용은 라우터의 중복기능을 수행할때 사용

// 미들웨어 끗

app.listen(port, () => {
  console.log(`${port}포트 서버 온`);
});
