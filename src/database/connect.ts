import {createConnection} from 'typeorm';

createConnection().then(()=> console.log('🎁 Bando de dados conectado!'));