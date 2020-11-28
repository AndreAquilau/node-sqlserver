## Documentação de como usar o Node com SQLServer

#### instalar driver de conexão do node com SQL-SERVER
```bash
yarn add typeorm reflect-metadata uuidv4 mssql msnodesqlv8 node-mssql
```

### file config ormconfig.js
```js
module.exports = {
  type: 'mssql',
  driver: 'msnodesqlv8',
  host: 'localhost',
  username: '',
  password: '',
  port: 1433,
  server: 'ANDRE-PC',
  database: 'dados',
  options: {
    trustedConnection: true,
    useUTC: true,
  },
  synchronize: false,
  logging: false,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  subscribers: [process.env.TYPEORM_SUBESCRIBERS],
  cli: {
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
};
```
