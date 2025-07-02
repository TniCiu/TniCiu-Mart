// Roles (used for permission control)
export const USER_ROLES = {
  ADMIN: "admin",
  MANAGER: "manager",
  STAFF: "staff",
  CUSTOMER: "customer"
};
export const USER_ROLE_VALUES = Object.values(USER_ROLES);

// Ranks (only for customer loyalty levels)
export const USER_RANKS = {
  BRONZE: "bronze",
  SILVER: "silver",
  GOLD: "gold",
  PLATINUM: "platinum",
  DIAMOND: "diamond"
};
export const USER_RANK_VALUES = Object.values(USER_RANKS);

// Account status (for controlling login/access)
export const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  BANNED: "banned"
};
export const USER_STATUS_VALUES = Object.values(USER_STATUS);

// Gender (used for profile & analytics)
export const USER_GENDERS = {
  MALE: "male",
  FEMALE: "female",
  OTHER: "other"
};
export const USER_GENDER_VALUES = Object.values(USER_GENDERS);
