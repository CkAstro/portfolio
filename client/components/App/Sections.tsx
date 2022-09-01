import { useState, useRef, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Section, Navbar } from '@/components';
import { Header, About, Contact, Projects, Research } from '@/sections';
import css from './App.module.scss';

const Sections = (): JSX.Element => {
   const [scrollValue, setScrollValue] = useState(0);
   const divRef = useRef<HTMLDivElement | null>(null);
   const { topic } = useParams();

   // prevent background scrolling when modal is open
   useEffect(() => {
      if (topic !== undefined) divRef.current!.style.overflow = 'hidden';
      else divRef.current!.style.overflow = '';
   }, [topic]);

   const handleScroll = (event: React.MouseEvent<HTMLDivElement>): void =>
      setScrollValue(event.currentTarget.scrollTop);

   return (
      <div ref={divRef} id="mainContainer" className={css.mainContainer} onScroll={handleScroll}>
         <Navbar scrollValue={scrollValue} />
         <Section
            navId="home"
            style={{ height: '100vh', background: 'var(--color-black)', padding: '0' }}
         >
            <Header />
         </Section>
         <Section
            navId="about"
            hasContent
            style={{
               minHeight: 'min(100vh, 1440px',
               maxHeight: '1440px',
               background: 'var(--color-white)',
            }}
         >
            <About />
         </Section>
         <Section navId="projects" hasContent style={{ background: 'var(--color-white)' }}>
            <Projects />
         </Section>
         <Section navId="research" hasContent style={{ background: 'var(--color-secondary)' }}>
            <Research />
         </Section>
         <Section
            navId="contact"
            hasContent
            style={{ minHeight: '100vh', background: 'var(--color-white)' }}
         >
            <Contact />
         </Section>
         <Outlet />
      </div>
   );
};

export default Sections;
