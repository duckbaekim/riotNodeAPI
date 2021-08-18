import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

const port: number = 8000;
//미들웨어 사용은 라우터의 중복기능을 수행할때 사용
app.use((req, res, next) => {
  //전체사용시 use() 사용 next사용시 미들웨어됌
  console.log(req.rawHeaders[1]);
  next();
});
app.get("/", (req, res, next) => {
  console.log("특정 미들웨어 사용");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  // console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});

app.get("/cat", (req: express.Request, res: express.Response) => {
  // console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
});

app.listen(port, () => {
  console.log("dsffdssdf");
});
