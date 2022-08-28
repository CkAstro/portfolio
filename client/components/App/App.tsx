import { useState } from 'react';
import { Section, Navbar } from '@/components';
import { Header, About } from '@/sections';

export const App = (): JSX.Element => {
   const [scrollValue, setScrollValue] = useState(0);

   const handleScroll = (event: React.MouseEvent<HTMLDivElement>): void =>
      setScrollValue(event.currentTarget.scrollTop);

   return (
      <div id="mainContainer" onScroll={handleScroll}>
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
      </div>
   );
};
