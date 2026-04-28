import * as usersSchema from './users.schema';
export const schema = {
  ...usersSchema,
};

export type Schema = typeof schema;
