import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';
import { usersSchema } from './users.schema';

@Injectable()
export class UsersStore {
  constructor(private readonly databaseProvider: DatabaseProvider) {}

  async createUser(displayName: string, email: string) {
    const db = this.databaseProvider.getClient();
    const [createdUser] = await db
      .insert(usersSchema)
      .values({
        displayName,
        email,
      })
      .returning();
    return createdUser;
  }
}
