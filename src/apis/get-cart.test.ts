const supertest = require("supertest");
const request = supertest(require('../index'));

describe("Testing that Cart 1 responds with a 200.", () => {
    it("GET /api/cart/1", async () => {
        const response = await request.get('/api/cart/1');
        expect(response.status).toEqual(200);
    });
});

// This demonstration has only two items in the cart.
describe("Cart 1 is id 1 and has two products.", () => {
    it("GET /api/cart/1", async () => {
        const response = await request.get('/api/cart/1');
        expect(response.body.id).toEqual(1);
        expect(Object.keys(response.body.products).length).toEqual(2);
    });
});

// For the purposes of this demonstration, there is only one cart in the database.
describe("Cart 2 does not exist.", () => {
    it("GET /api/cart/2", async () => {
        const response = await request.get('/api/cart/2');
        expect(response.status).toEqual(404);
    });
});
