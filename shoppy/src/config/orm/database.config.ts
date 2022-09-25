import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

export class DatabaseConfiguration implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    console.log(process.env.DATABASE_URL);
    console.log(process.env.APP_PORT);
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      // host: process.env.DB_HOST,
      // port: +process.env.DB_PORT_INT,
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME,
      autoLoadEntities: true,

      //   entities: [process.env.TYPEORM_ENTITIES],
      logging: true,
      synchronize: true,
      //   migrations: [process.env.TYPEORM_MIGRATIONS],
      //   cli: {
      //     migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
      //   },
      //   namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
