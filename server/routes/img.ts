import express from 'express';

const imgRouter = express.Router();

imgRouter.get('/:file', (request: express.Request, response: express.Response) => {
   const { file } = request.params;
   response.sendFile(`./server/storage/img/${file}`, (err) => {
      if (err) response.status(404).send({ error: 'file not found (404)' });
   });
});

export { imgRouter };
