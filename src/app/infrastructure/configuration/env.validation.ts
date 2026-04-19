import { plainToInstance, Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  Max,
  Min,
  validateSync,
} from 'class-validator';

export class EnvironmentVariables {
  @IsEnum(['development', 'production', 'test'])
  NODE_ENV!: string;

  @IsNumber()
  @Min(1)
  @Max(65535)
  @Transform(({ value }) => Number(value))
  PORT!: number;

  @IsNotEmpty()
  DB_USER!: string;

  @IsNotEmpty()
  DB_PASSWORD!: string;

  @IsNotEmpty()
  DB_NAME!: string;

  @IsNumber()
  @Min(1)
  @Max(65535)
  @Transform(({ value }) => Number(value))
  DB_PORT!: number;
}

export const validateEnv = (config: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(EnvironmentVariables, config);

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};
