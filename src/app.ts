import * as express from "express";

const app: express.Express = express();

const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);

  res.send("hello World!");
});

app.post("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send("success");
});

app.listen(port, () => {
  console.log("dsffdssdf");
});
