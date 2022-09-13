import express from 'express';

const resumeRouter = express.Router();

resumeRouter.get('/', (request: express.Request, response: express.Response) => {
   response.sendFile('./server/storage/resume/resume.pdf', (err) => {
      if (err) response.status(404).send({ error: 'file not found (404)' });
   });
});

export { resumeRouter };
