const sql = require('mssql');
const windowsDriver = require('mssql/msnodesqlv8');

module.exports = {
  type: 'mssql',
  driver: windowsDriver,
  host: 'localhost',
  port: 1433,
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
