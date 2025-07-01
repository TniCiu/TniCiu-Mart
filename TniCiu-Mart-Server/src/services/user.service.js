
import { slugify } from "~/utils/formatters"

const createUser = async (reqBody) => {
  try {
    const newUser = {
      ...reqBody,
      slug: slugify(reqBody.name),
    };
    return newUser;
  } catch (error) {
    console.error("Create user error:", error);
    throw error;
  }
};


export const UserService = {
    createUser
}