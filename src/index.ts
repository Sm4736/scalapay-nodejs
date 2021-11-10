import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {router} from "./apis/getCart";

const app = express()
.use(cors())
.use(bodyParser.json())
.use(router);

app.listen(3000, () => {
    return console.log('Running on port 3000')
});
