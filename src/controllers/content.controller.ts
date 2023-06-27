import { Request, RequestHandler, Response } from "express";
import {
  createItem,
  getItems,
  getItemsWithSlug,
  searchItems,
} from "../services/content";
import { generate } from "randomstring";

export const getArticles: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { limit, skip, sortBy }: any = req.query;
    const data = await getItems({
      limit: parseInt(limit) || 10,
      skip: parseInt(skip) || 0,
      sortBy: sortBy || "created_at",
    });
    return res.status(200).send(data);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving data from DB" });
  }
};

export const searchArticles: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { limit, skip, sortBy, isFeatured }: any = req.query;
    const data = await searchItems(
      {
        limit: parseInt(limit) || 10,
        skip: parseInt(skip) || 0,
        sortBy: sortBy || "created_at",
      },
      {
        isFeatured: isFeatured,
      }
    );
    return res.status(200).send(data);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving data from DB" });
  }
};

export const createArticle: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const body = req.body;
    const id = generate(7);

    const heading = body.heading.replaceAll(" ", "-");
    const item = await createItem({
      title: body.heading,
      slug: `${heading}-${id}`,
      mainImageUri: body.mainImageUri,
      isPublished: body.isPublished,
      isFeatured: body.isFeatured,
      richText: body.richText,
      createdAt: "Date",
      category: body.category,
      tags: ["sport", "cricket"],
      authorId: "deepanshu.gupta",
    });
    return res.status(200).send(item);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving data from DB" });
  }
};

export const getArticle: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const title = req.params["title"];
    const data = await getItemsWithSlug(title);
    return res.status(200).send(data);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving data from DB" });
  }
};
