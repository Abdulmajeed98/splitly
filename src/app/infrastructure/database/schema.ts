import * as usersSchema from '~/infrastructure/database/users.schema';
export const schema = {
  ...usersSchema,
};

export type Schema = typeof schema;
