import { ContactForm } from '@/components';
import Footer from './Footer';
import css from './Contact.module.scss';

export const Contact = (): JSX.Element => (
   <>
      <div className={css.header}>
         <h1>
            Contact <span style={{ fontWeight: '100' }}>Me</span>
         </h1>
         <p>Interested in working together or have a question? Let me know!</p>
      </div>
      <ContactForm />
      <Footer />
   </>
);
