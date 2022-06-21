import compose from "koa-compose";
import convert from "koa-convert";
import bodyParser from "koa-bodyparser";
import json from "koa-json";
import helmet from "koa-helmet";
import cors from "@koa/cors";

import states from "../util/states";

export default function middleware() {
    return compose([
        bodyParser({
            multipart: true,
            formLimit: "10mb",
            jsonLimit: "10mb",
            textLimit: "10mb",
            enableTypes: ['json', 'form', 'text']
        }),
        convert(json()),
        helmet(),
        convert(cors()),
        states(),
    ]);
}