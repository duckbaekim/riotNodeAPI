import { Cat, CatType } from "./cats.model";
import { Router, Request, Response } from "express";
const router = Router();

//* Read 고양이 전체 조회
router.get("/cats", (req, res) => {
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
  // res.send({ cats: Cat });
});

//* Read 특정 고양이 조회
router.get("/cats/:id", (req, res) => {
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
});

//* CREATE 새로운 고양이 추가
router.post("/cats", (req, res) => {
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

export default router;
