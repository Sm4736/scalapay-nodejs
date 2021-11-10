var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const supertest = require("supertest");
const request = supertest(require('../index'));
describe("Testing that Cart 1 responds with a 200.", () => {
    it("GET /api/cart/1", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request.get('/api/cart/1');
        expect(response.status).toEqual(200);
    }));
});
// This demonstration has only two items in the cart.
describe("Cart 1 is id 1 and has two products.", () => {
    it("GET /api/cart/1", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request.get('/api/cart/1');
        expect(response.body.id).toEqual(1);
        expect(Object.keys(response.body.products).length).toEqual(2);
    }));
});
// For the purposes of this demonstration, there is only one cart in the database.
describe("Cart 2 does not exist.", () => {
    it("GET /api/cart/2", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request.get('/api/cart/2');
        expect(response.status).toEqual(404);
    }));
});
