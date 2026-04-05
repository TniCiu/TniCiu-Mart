import Joi from "joi";
import {
  USER_ROLES,
  USER_GENDERS,
  USER_STATUS,
  USER_RANKS,
} from "~/enums/user.enum.js";
import { CONNECT_DB } from "~/config/mysql.js";

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
  password: Joi.string().required().min(6).max(255).strict(),

  role: Joi.string()
    .valid(...Object.values(USER_ROLES))
    .default(USER_ROLES.CUSTOMER),

  rank: Joi.when("role", {
    is: USER_ROLES.CUSTOMER,
    then: Joi.string()
      .valid(...Object.values(USER_RANKS))
      .default(USER_RANKS.BRONZE),
    otherwise: Joi.allow(null),
  }),

  gender: Joi.string()
    .valid(...Object.values(USER_GENDERS))
    .default(USER_GENDERS.OTHER),

  address: Joi.string().allow("").max(255).trim().strict().default(""),
  avatar: Joi.string().allow("").max(255).trim().strict().default(""),

  status: Joi.string()
    .valid(...Object.values(USER_STATUS))
    .default(USER_STATUS.ACTIVE),

  isEmailVerified: Joi.boolean().default(false),
  createdAt: Joi.date().default(() => new Date()),
  updatedAt: Joi.date().allow(null).default(null),
  _destroy: Joi.boolean().default(false),
});

const validateBeforeCreate = async (data) => {
  return await USER_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
    stripUnknown: true,
  });
};

const initUsersTable = async () => {
  const connection = await CONNECT_DB();

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS ${USER_COLLECTION_NAME} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      slug VARCHAR(100) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(20) DEFAULT 'customer',
      \`rank\` VARCHAR(20) DEFAULT 'bronze',
      gender VARCHAR(20) DEFAULT 'other',
      address VARCHAR(255),
      avatar VARCHAR(255),
      status VARCHAR(20) DEFAULT 'active',
      isEmailVerified BOOLEAN DEFAULT FALSE,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NULL,
      _destroy BOOLEAN DEFAULT FALSE
    )
  `);
};

const findOneByEmail = async (email) => {
  const connection = await CONNECT_DB();

  const [rows] = await connection.execute(
    `SELECT * FROM ${USER_COLLECTION_NAME} WHERE email = ? LIMIT 1`,
    [email]
  );

  return rows[0] || null;
};

const findOneById = async (id) => {
  const connection = await CONNECT_DB();

  const [rows] = await connection.execute(
    `SELECT * FROM ${USER_COLLECTION_NAME} WHERE id = ? LIMIT 1`,
    [id]
  );

  return rows[0] || null;
};

const getAll = async () => {
  const connection = await CONNECT_DB();

  const [rows] = await connection.execute(
    `SELECT * FROM ${USER_COLLECTION_NAME} WHERE _destroy = false`
  );

  return rows;
};

const createNew = async (data) => {
  try {
    const validatedData = await validateBeforeCreate(data);
    const connection = await CONNECT_DB();

    const columns = Object.keys(validatedData).map(
      (col) => `\`${col}\``
    );
    const values = Object.values(validatedData);
    const placeholders = columns.map(() => "?").join(", ");

    const sql = `
      INSERT INTO ${USER_COLLECTION_NAME}
      (${columns.join(", ")})
      VALUES (${placeholders})
    `;

    const [result] = await connection.execute(sql, values);

    return result;
  } catch (error) {
    throw error;
  }
};

const updateById = async (id, data) => {
  const connection = await CONNECT_DB();

  const fields = Object.keys(data);
  const values = Object.values(data);

  const setClause = fields.map((field) => `${field} = ?`).join(", ");

  const sql = `
    UPDATE ${USER_COLLECTION_NAME}
    SET ${setClause}, updatedAt = NOW()
    WHERE id = ?
  `;

  const [result] = await connection.execute(sql, [...values, id]);

  return result;
};

const softDelete = async (id) => {
  return await updateById(id, { _destroy: true });
};

export const UserModel = {
  USER_COLLECTION_NAME,
  USER_COLLECTION_SCHEMA,
  initUsersTable,
  findOneByEmail,
  findOneById,
  getAll,
  createNew,
  updateById,
  softDelete,
};