import database from '@database/index';

database()
  .then(() => {
    console.log('Connection DataBase Success');
  })
  .catch((error) => {
    console.log(`Erro Connection DataBase ${error.message}`);
  });
