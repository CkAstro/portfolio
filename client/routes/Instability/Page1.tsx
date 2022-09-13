import css from '../routes.module.scss';

const Page1 = (): JSX.Element => (
   <div className={css.container}>
      <div className={css.content}>
         <h1>
            <span style={{ fontWeight: '100' }}>A Rayleigh-Taylor</span> Instability
         </h1>
         <p>
            This animation is <b>interactive</b>. Use your mouse/finger to rotate it. Note this is
            graphically intense and may have trouble on mobile. Head to the next page to learn how
            this instability forms.
         </p>
         {/* <App /> */}
      </div>
   </div>
);

export default Page1;
