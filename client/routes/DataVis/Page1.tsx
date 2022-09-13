import { datavis } from '@/assets';
import { AnimatedButton, Icons } from '@/components';
import css from '../routes.module.scss';

const Page1 = (): JSX.Element => (
   <div className={css.container}>
      <img alt="DataVis" src={datavis} />
      <div className={`${css.content}`}>
         <h1>
            <a
               href="https://github.com/CkAstro/datavis"
               target="_blank"
               title="View project on GitHub"
               rel="noreferrer"
            >
               <Icons.GitHub fill="black" size={24} />
            </a>{' '}
            DataVis
         </h1>

         <p>
            View volumetric scalar data from your browser. This web-app allows the user to upload
            and view their own research data with support for multiple formats and resolutions.
         </p>

         <p>
            The front-end is created in React and uses a custom WebGL/GLSL implementation to quickly
            render volumetric data mapped to planar and spherical shapes, or shown as an iso-surface
            (a surface of constant value). The back-end runs on Node.js with Express and will
            process incomming datasets to add an easily-renderable data format to the API response.
         </p>

         <a href="https://datavis.chriskolb.dev" target="_blank" rel="noreferrer">
            <AnimatedButton.Style2>View App</AnimatedButton.Style2>
         </a>
      </div>
   </div>
);

export default Page1;
