import { useDispatch } from 'react-redux';
import { NucleoDisplay } from '@/components';
import { mouseLocation } from '@/store';
import css from './Header.module.scss';

export const Header = (): JSX.Element => {
   const { update } = mouseLocation.actions;
   const dispatch = useDispatch();

   const handleMouseMove = (event: React.MouseEvent): void => {
      const { clientX, clientY } = event;
      dispatch(update({ x: clientX, y: clientY, isActive: true }));
   };

   return (
      <div onMouseMove={handleMouseMove}>
         <div className={`noselect ${css.header}`}>
            <h1>Christopher Kolb</h1>
            <h2>
               Full Stack Development <span style={{ fontWeight: '400' }}>+</span> Computational
               Astrophysics
            </h2>
         </div>
         <NucleoDisplay />
      </div>
   );
};
