import { SketchCard, SketchItem, Icons } from '@/components';

const LanguagesCard = (): JSX.Element => (
   <SketchCard>
      <h1>Languages</h1>
      <SketchItem percent={90} itemDelay={0.05}>
         JavaScript / TypeScript
      </SketchItem>
      <SketchItem percent={90} itemDelay={0.1}>
         HTML5 / CSS3 / SVG
      </SketchItem>
      <SketchItem percent={80} itemDelay={0.15}>
         WebGL / GLSL
      </SketchItem>
      <SketchItem percent={80} itemDelay={0.2}>
         Python
      </SketchItem>
      <SketchItem percent={75} itemDelay={0.25}>
         FORTRAN
      </SketchItem>
      <SketchItem percent={75} itemDelay={0.3}>
         Bash
      </SketchItem>
      <SketchItem percent={75} itemDelay={0.35}>
         <Icons.LaTeX />
         <span style={{ opacity: '0' }}>LaTeX</span>
      </SketchItem>
      <SketchItem percent={50} itemDelay={0.4}>
         C / C++
      </SketchItem>
      <SketchItem percent={50} itemDelay={0.45}>
         PHP
      </SketchItem>
      <SketchItem percent={35} itemDelay={0.5}>
         Java
      </SketchItem>
   </SketchCard>
);

export default LanguagesCard;
