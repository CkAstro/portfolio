import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Section, Navbar, Modal } from '@/components';
import { ContentRouter } from '@/routes';
import { Header, About, Contact, Projects } from '@/sections';
import css from './App.module.scss';

const Sections = (): JSX.Element => (
   <>
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
      <Section
         navId="contact"
         hasContent
         style={{ minHeight: '100vh', background: 'var(--color-white)' }}
      >
         <Contact />
      </Section>
      <Outlet />
   </>
);

export const App = (): JSX.Element => {
   const [scrollValue, setScrollValue] = useState(0);

   const handleScroll = (event: React.MouseEvent<HTMLDivElement>): void =>
      setScrollValue(event.currentTarget.scrollTop);

   return (
      <div id="mainContainer" className={css.mainContainer} onScroll={handleScroll}>
         <Navbar scrollValue={scrollValue} />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Sections />}>
                  <Route path="/content" element={<Modal />}>
                     <Route index element={<Navigate replace to="/" />} />
                     {ContentRouter}
                  </Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
};
