import { Cat, CatType } from "./cats.model";
import { Request, Response } from "express";

//* Read 고양이 전체 조회
export const readAllcat = (req: Request, res: Response) => {
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
};

//* Read 특정 고양이 조회
export const readCat = (req: Request, res: Response) => {
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
};

//* CREATE 새로운 고양이 추가
export const createCat = (req: Request, res: Response) => {
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
};

//* UPDATE 전체 수정
export const updateCat = (req: Request, res: Response) => {
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
};

//* UPDATE 부분 수정
export const updatePartialCat = (req: Request, res: Response) => {
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
};

//* DELETE 삭제
export const deleteCat = (req: Request, res: Response) => {
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
};
