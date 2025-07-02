import { password } from "input";
import Joi, { date } from "joi";
import {
  USER_ROLES,
  USER_GENDERS,
  USER_STATUS,
  USER_RANKS,
} from "~/enums/user.enum.js";

const USER_COLLECTION_NAME = "users";
const USER_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().min(3).max(50).trim().strict(),
  slug: Joi.string().required().min(3).trim().strict(),
  phone: Joi.string()
    .pattern(/^(0|\+84)(\d{9})$/)
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required().min(6).max(50).strict(),
  role: Joi.string()
    .valid(...USER_ROLES)
    .default("customer"),
  rank: Joi.when("role", {
    is: "customer",
    then: Joi.string()
      .valid(...USER_RANKS)
      .default("bronze"),
    otherwise: Joi.forbidden(),
  }),
  gender: Joi.string()
    .valid(...USER_GENDERS)
    .default("other"),
  address: Joi.string().allow("").max(255).trim().strict(),
  avatar: Joi.string().uri().allow("").max(255).trim().strict(),
  status: Joi.string()
    .valid(...USER_STATUS)
    .default("true"),
  isEmailVerified: Joi.boolean().default(false),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(null),
  _destroy: Joi.boolean().default(false)
});

export const UserModel = {
    USER_COLLECTION_NAME,
    USER_COLLECTION_SCHEMA
}