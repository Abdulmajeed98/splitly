import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { type Schema, schema } from './schema';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from 'src/app/infrastructure/configuration/env.validation';
@Injectable()
export class DatabaseProvider implements OnModuleDestroy {
  private readonly pool: Pool;
  private readonly client: NodePgDatabase<Schema>;

  constructor(configService: ConfigService<EnvironmentVariables, true>) {
    const dbUser = configService.get('DB_USER', { infer: true });
    const dbPassword = configService.get('DB_PASSWORD', { infer: true });
    const dbName = configService.get('DB_NAME', { infer: true });
    const dbPort = configService.get('DB_PORT', { infer: true });

    this.pool = new Pool({
      user: dbUser,
      password: dbPassword,
      database: dbName,
      port: dbPort,
    });

    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });

    this.client = drizzle(this.pool, { schema });
  }

  getClient(): NodePgDatabase<Schema> {
    return this.client;
  }

  getPool(): Pool {
    return this.pool;
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
