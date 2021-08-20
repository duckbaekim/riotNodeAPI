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
    Cat.push(data);
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

//* UPDATE 전체 수정
router.put("/cats/:id", (req, res) => {
  try {
    const { params, body } = req;
    const idx = Cat.findIndex((cat) => cat.id === params.id);
    Cat[idx] = body; // Update Code 추가
    res.status(200).send({
      success: true,
      data: {
        cat: Cat,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      data: {},
    });
  }
});

//* UPDATE 부분 수정
router.patch("/cats/:id", (req, res) => {
  try {
    const { params, body } = req;
    const idx = Cat.findIndex((cat) => cat.id === params.id);
    Cat[idx] = { ...Cat[idx], ...body }; //부분수정 Update Code
    res.status(200).send({
      success: true,
      data: {
        cat: Cat,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      data: {},
    });
  }
});

//* DELETE 삭제
router.delete("/cats/:id", (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const newCat = Cat.filter((cat) => cat.id !== id);
    res.status(200).send({
      success: true,
      data: {
        cat: newCat,
      },
    });
  } catch (e) {
    res.status(400).send({
      success: false,
      data: {},
    });
  }
});
export default router;
