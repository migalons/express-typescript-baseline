import { getCatalog } from './CatalogController';
import { Request, Response } from 'express';

export default [
    {
        path: "/api/catalog/:id",
        method: "get",
        handler: [
            (req: Request, res: Response) => {
                res.json(getCatalog(req.params.id))
            }
        ]
    }
];
