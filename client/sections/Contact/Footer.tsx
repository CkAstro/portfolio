import { baseUrl } from '@/api';
import { Icons } from '@/components';
import css from './Contact.module.scss';

const Footer = (): JSX.Element => (
   <div className={css.footer}>
      <div className={css.linkContainer}>
         <a href="https://github.com/CkAstro" target="_blank" rel="noreferrer">
            <Icons.GitHub size={24} />
         </a>
         <a href={`${baseUrl}/resume`} target="_blank" rel="noreferrer">
            resume
         </a>
         <a
            href="https://www.linkedin.com/in/christopher-kolb-071334232"
            target="_blank"
            rel="noreferrer"
         >
            <Icons.LinkedIn size={24} />
         </a>
      </div>
      <div className={css.copyright}>Copyright Christopher Kolb, 2022. Site design by me.</div>
   </div>
);

export default Footer;
