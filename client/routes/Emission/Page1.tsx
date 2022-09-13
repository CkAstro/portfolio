import Tex2SVG from 'react-hook-mathjax';
import css from '../routes.module.scss';

const Page1 = (): JSX.Element => (
   <div className={css.container}>
      <div className={css.content}>
         <h1>
            <span style={{ fontWeight: '100' }}>Supernova</span> Emission
         </h1>
         <p>
            This animation is <b>interactive</b>. Use your mouse/finger to rotate it. Note this is
            graphically intense and may have trouble on mobile and older PCs. Use the <b>slider</b>{' '}
            and <b>button</b> below to change the frequency <Tex2SVG display="inline" latex="\nu" />{' '}
            of light and to toggle the circumstellar medium. More information available on the next
            page!
         </p>
         {/* <App /> */}
      </div>
   </div>
);

export default Page1;
