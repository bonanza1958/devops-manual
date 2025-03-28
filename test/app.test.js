import request from 'supertest';
import app from '../app.js'; // Importar `app.js` correctamente

import chai from 'chai';
const { expect } = chai;

describe('GET /', () => {
  it('debería responder con "¡Hola, mundo!"', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('¡Hola, mundo!');
  });
});
