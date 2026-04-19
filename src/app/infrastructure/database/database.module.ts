import { Global, Module } from '@nestjs/common';
import { DatabaseProvider } from 'src/app/infrastructure/database/database.provider';
import { DATABASE_POOL_TOKEN } from './database.token';

@Global()
@Module({
  providers: [
    DatabaseProvider,
    {
      provide: DATABASE_POOL_TOKEN,
      useFactory: (databaseProvider: DatabaseProvider) =>
        databaseProvider.getPool(),
      inject: [DatabaseProvider],
    },
  ],
  exports: [DatabaseProvider, DATABASE_POOL_TOKEN],
})
export class DatabaseModule {}
