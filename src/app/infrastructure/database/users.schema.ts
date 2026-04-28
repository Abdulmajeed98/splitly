import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const usersSchema = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  displayName: varchar('display_name', { length: 35 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
