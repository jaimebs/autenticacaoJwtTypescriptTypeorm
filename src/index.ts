import 'reflect-metadata';
import express from 'express'
import routes from './routes';
import './database/connect';
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, ()=> console.log('🐱‍ Servidor rodando na porta 3333'));

//  Obs: Na linha de comando do terminal para cria uma migration,
//  usar npx typeorm migration:create -n nomeDaMigration

//  Obs: Na linha de comando do terminal para rodar uma migration,
//  usar npm run typeorm migration:run


