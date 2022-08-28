import { Link } from 'react-scroll';
import { ActionElement, Icons } from '@/components';
import css from './About.module.scss';

const IntroContainer = (): JSX.Element => (
   <ActionElement
      actionClass={css.active}
      onlyOnce
      style={{ color: 'var(--color-black)' }}
      className={css.intro}
   >
      <h1 style={{ color: 'var(--color-primary)' }}>
         Hi, I&apos;m <b style={{ fontWeight: '900' }}>Chris</b>
      </h1>
      <p style={{ '--delay': '4.0s' } as React.CSSProperties}>
         I love math, physics, and programming.
      </p>
      <p style={{ '--delay': '5.5s' } as React.CSSProperties}>
         I also love designing awesome stuff,
      </p>
      <div className={css.inline}>
         <p style={{ '--delay': '6.5s' } as React.CSSProperties}>like responsive sites,</p>
         <p style={{ '--delay': '7.25s' } as React.CSSProperties}>interactive figures,</p>
         <p style={{ '--delay': '8.0s' } as React.CSSProperties}>and complex simulations.</p>
      </div>
      <div style={{ '--delay': '9s' } as React.CSSProperties} className={css.linkIcon}>
         <Link smooth spy to="projects" containerId="mainContainer">
            <Icons.DownArrow fill="black" size={36} style={{ cursor: 'pointer' }} />
         </Link>
      </div>
   </ActionElement>
);

export default IntroContainer;
