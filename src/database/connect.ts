import { createConnection } from 'typeorm';

// eslint-disable-next-line no-console
createConnection().then(() => console.log('🎁 Bando de dados conectado!'));
