import App from './App';
// eslint-disable-next-line import/order
import css from '../routes.module.scss';

const Page1 = (): JSX.Element => (
   <div className={css.container} style={{ background: '#ddd' }}>
      <div className={css.content}>
         <h1>Neural Network</h1>
         <p>
            Begin by writing a number in the left box. An explanation for the plots on the right is
            coming soon.
         </p>
         <App />
      </div>
   </div>
);

export default Page1;
