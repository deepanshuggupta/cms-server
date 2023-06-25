import { Content } from "../../models/content.model";

interface GetItemProps {
  limit: number;
  skip: number;
  sortBy: string;
}
export const getItems = async ({ limit, skip, sortBy }: GetItemProps) => {
  const data = await Content.find()
    .sort({
      [sortBy]: -1,
    })
    .skip(skip)
    .limit(limit);

  const count = await Content.count();
  const result = {
    data,
    total: count,
  };

  return result;
};

export const createItem = async (obj: any) => {
  const data = await Content.create(obj);
  return data;
};

export const getItemsWithSlug = async (slug: string) => {
  const data = await Content.findOne({
    slug,
  });
  if (!data) {
    throw new Error("Could not find article");
  }
  return data;
};

export const searchItems = async (
  { limit, skip, sortBy }: GetItemProps,
  searchCriteria: any
) => {
  const { isFeatured } = searchCriteria;
  const data = await Content.find({
    isFeatured,
  })
    .sort({
      [sortBy]: -1,
    })
    .skip(skip)
    .limit(limit);

  const count = await Content.count();
  const result = {
    data,
    total: count,
  };

  return result;
};
