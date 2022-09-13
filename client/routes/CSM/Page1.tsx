import css from '../routes.module.scss';

const Page1 = (): JSX.Element => (
   <div className={css.container}>
      <div className={css.content}>
         <h1>
            <span style={{ fontWeight: '100' }}>Circumstellar Medium</span> Research Data
         </h1>
         <p>
            View and interact with 36 research datasets. Data displayed is azimuthally-averaged
            density from the circumstellar medium around a windy binary star system (see
            &apos;Binary CSM below&apos;).
         </p>
         {/* <App /> */}
      </div>
   </div>
);

export default Page1;
