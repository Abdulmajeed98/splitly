import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '~/infrastructure/database/database.provider';
import { usersSchema } from '~/infrastructure/database/users.schema';

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
