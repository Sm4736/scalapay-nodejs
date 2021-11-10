import {NextFunction, Request, Response, Router} from "express";
import {getCartRepository} from "../sqlite-connection";

export const router: Router = Router();

router.get('/api/cart/:id', async function (req: Request, res: Response, next: NextFunction) {
    try {
        const repository = await getCartRepository();
        const cart = await repository.findOne(req.params.id, {relations: ["products"]});
        res.send(cart);
    }
    catch (err) {
        return next(err);
    }
});
