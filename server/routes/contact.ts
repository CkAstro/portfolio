import express from 'express';
import nodeMailer from 'nodemailer';
import { MAIL_TOKEN, MAIL_ADDRESS } from '@server/config';
import { logger } from '@server/utils';

const contactRouter = express.Router();

contactRouter.post('/', (request: express.Request, response: express.Response) => {
   const { name, email, message } = request.body;
   if (email === 'test@e.mail' || email === 'te-st+em.ail@e.ma.iltest') return;

   const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
         user: MAIL_ADDRESS,
         pass: MAIL_TOKEN,
      },
   });

   const mailOptions = {
      from: email,
      to: MAIL_ADDRESS,
      subject: `Contact Message: ${name} (${email})`,
      text: message,
   };

   transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
         logger(err);
         response.send({
            success: false,
            message: `Error sending message. Please try again later, or contact me directly at ${MAIL_ADDRESS}`,
         });
      } else {
         logger(info);
         response.send({
            success: true,
            message: 'Message sent. Thank you for contacting me.',
         });
      }
   });
});

export { contactRouter };
