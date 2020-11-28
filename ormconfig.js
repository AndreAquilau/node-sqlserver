var sql = require('mssql');
var windowsDriver = require('mssql/msnodesqlv8');

module.exports = {
  type: 'mssql',
  driver: 'msnodesqlv8',
  host: 'localhost',
  username: 'supersys',
  password: 'super3650',
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
