import express from 'express';
import fs from 'fs';
import { logger } from '@server/utils';

const neuralnetRouter = express.Router();

// retrieve NN file
neuralnetRouter.get('/:file', (request: express.Request, response: express.Response) => {
   const { file } = request.params;
   fs.readFile(`./server/storage/nn/${file}`, (err, data) => {
      if (err) logger(err);
      else response.json(JSON.parse(data as unknown as string));
   });
});

// add to NN database
neuralnetRouter.post('/', (request: express.Request, response: express.Response) => {
   const data = JSON.stringify(request.body, null, 3);
   const filename = Date.now().toString(36);
   fs.writeFile(`./server/storage/nn/input_${filename}.json`, data, (err) => {
      if (err) logger(err);
   });
   response.send(true);
});

export { neuralnetRouter };
