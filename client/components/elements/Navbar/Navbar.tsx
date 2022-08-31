import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import sections from './sections';
import css from './Navbar.module.scss';

type Props = {
   scrollValue: number;
};

export const Navbar = ({ scrollValue }: Props): JSX.Element => {
   const [isStatic, setIsStatic] = useState(false);

   useEffect(() => {
      if (scrollValue > window.innerHeight - 1) return void setIsStatic(true);
      if (scrollValue < window.innerHeight - 40) return void setIsStatic(false);
      return undefined;
   }, [scrollValue]);

   const navLinks = sections.map((section) => (
      <Link
         key={section.title}
         activeClass={css.active}
         smooth
         spy
         to={section.link}
         containerId="mainContainer"
         className={`noselect ${css.link} ${isStatic ? css.static : ''}`}
      >
         {section.title}
      </Link>
   ));

   return (
      <div className={`noselect ${css.navbar} ${isStatic ? css.static : ''}`}>
         <div className={css.buttons}>
            {navLinks}
            <div className={`noselect ${css.brand}`}>CHRISTOPHER KOLB</div>
         </div>
      </div>
   );
};
