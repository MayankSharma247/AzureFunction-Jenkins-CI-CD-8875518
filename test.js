const request = require('supertest');
const app = require('./index');

describe('Azure Function Tests', () => {
    it('should return 200 status', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should return "Hello, World!"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, World!');
    });
});
