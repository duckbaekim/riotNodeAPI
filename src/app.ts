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
// 미들웨어 끗
//* Read 고양이 전체 조회
app.get("/cats", (req: express.Request, res: express.Response) => {
  try {
    const cats = Cat;
    // throw new Error("db connect Error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.message,
    });
  }
  res.send({ cats: Cat });
});

//* Read 특정 고양이 조회
app.get("/cats/:id", (req: express.Request, res: express.Response) => {
  try {
    const {
      params: { id },
    } = req;
    const cat = Cat.find((cat) => cat.id === id);

    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.message,
    });
  }
  res.send({ cats: Cat });
});
//* json middle ware
app.use(express.json());

//* CREATE 새로운 고양이 추가
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      error: e.message,
    });
  }
});

app.get("/cats", (req: express.Request, res: express.Response) => {
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
