import { useState } from 'react';
import { sendUserMessage } from '@/api';
import type { ContactMessage } from '@/types';
import FormInput from './FormInput';
import css from './ContactForm.module.scss';

export const ContactForm = (): JSX.Element => {
   const defaultName = 'Name';
   const defaultEmail = 'Email';
   const defaultMessage = 'Message...';

   const [name, setName] = useState(defaultName);
   const [email, setEmail] = useState(defaultEmail);
   const [message, setMessage] = useState(defaultMessage);
   const [hasPendingSubmit, setHasPendingSubmit] = useState(false);
   const [lastMessage, setLastMessage] = useState<ContactMessage>({
      name: defaultName,
      email: defaultEmail,
      message: defaultMessage,
   });

   const handleNameChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ): void => setName(event.currentTarget.value);
   const handleEmailChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ): void => setEmail(event.currentTarget.value);
   const handleMessageChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ): void => setMessage(event.currentTarget.value);

   const handleSubmit = (event: React.FormEvent): void => {
      event.preventDefault();
      if (hasPendingSubmit) return undefined;
      if (name === defaultName) return void alert('Please enter a name.');
      if (email === defaultEmail) return void alert('Please enter an email.');
      if (message === defaultMessage) return void alert('Please enter a message.');
      if (
         name === lastMessage.name &&
         email === lastMessage.email &&
         message === lastMessage.message
      )
         return void alert('Message already received!');

      const regex = /(^[\w+-.]+)@((?:[\w]+\.)+)([a-zA-Z]+)/;
      if (!regex.test(email))
         return void alert(
            'Please enter a valid email. If you see this message in error, contact me directly at astro.cekolb@gmail.com'
         );

      // submission verified, send
      setHasPendingSubmit(true);
      return void sendUserMessage({ name, email, message })
         .then((res) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (res.success as boolean) setLastMessage({ name, email, message });
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            alert(res.message);
         })
         .then(() => setHasPendingSubmit(false))
         .catch(() => setHasPendingSubmit(false));
   };

   return (
      <div className={css.container}>
         <form onSubmit={handleSubmit}>
            <FormInput
               type="text"
               value={name}
               onChange={handleNameChange}
               className={`${css.form__name} ${
                  name === defaultName || name === lastMessage.name ? css.inactive : ''
               }`}
            />
            <FormInput
               type="text"
               value={email}
               onChange={handleEmailChange}
               className={`${css.form__email} ${
                  email === defaultEmail || email === lastMessage.email ? css.inactive : ''
               }`}
            />
            <FormInput
               type="textArea"
               value={message}
               onChange={handleMessageChange}
               className={`${css.form__message} ${
                  message === defaultMessage || message === lastMessage.message ? css.inactive : ''
               }`}
            />
            <button className={css.form__submit} onClick={handleSubmit}>
               Submit
            </button>
         </form>
      </div>
   );
};
