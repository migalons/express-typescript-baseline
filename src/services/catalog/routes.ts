import { Request, Response } from "express";

export default [
    {
        path: "/api/catalog",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello world!");
        }
    }
];
