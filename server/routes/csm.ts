import express from 'express';
import fs from 'fs';
import { logger } from '@server/utils';

const csmRouter = express.Router();

csmRouter.get('/:mrto/:vwind/:vrto', (request: express.Request, response: express.Response) => {
   const { mrto, vwind, vrto } = request.params;
   fs.readFile(`./server/storage/csm/50-${mrto}-${vwind}-${vrto}-lri.json`, (err, data) => {
      if (err) logger(err);
      else response.json(JSON.parse(data as unknown as string));
   });
});

export { csmRouter };
