import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnimatedButton } from '@/components';
import { itemEnabler } from '@/store';
import type { RootState } from '@/store';
import css from './ClusterItem.module.scss';

type Props = {
   title: string | React.ReactNode;
   components: string;
   image: string;
   description: string;
   link: string;
   textColor?: string;
};

export const ClusterItem = ({
   title,
   components,
   image,
   description,
   link,
   textColor = 'var(--color-black)',
}: Props): JSX.Element => {
   const [hasMouseOver, setHasMouseOver] = useState(false);
   const [isDragged, setIsDragged] = useState(false);
   const { enable } = itemEnabler.actions;
   const isEnabled = useSelector((state: RootState) => state.itemEnabler);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleTouchMove = (): void => setIsDragged(true);

   const handleTouchEnd = (): void => {
      if (isDragged) return void setIsDragged(false);
      if (isEnabled.id === title) return void dispatch(enable(null));
      return void dispatch(enable(title));
   };

   const handleClick = (event: React.MouseEvent): void => {
      event.stopPropagation();
      navigate(link);
   };

   useEffect(() => {
      if (isEnabled.id !== title) return void setHasMouseOver(false);
      return void setHasMouseOver(true);
   }, [isEnabled.id, title]);

   return (
      <div
         className={css.item}
         onMouseEnter={(): void => setHasMouseOver(true)}
         onMouseLeave={(): void => setHasMouseOver(false)}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
      >
         <div className={`${css.container} ${hasMouseOver ? css.mouseOver : ''}`}>
            <img src={image} alt={description} />
            <div className={css.topContent}>
               <h1 style={{ color: textColor }}>{title}</h1>
               <h2>{components}</h2>
            </div>
            <div className={css.bottomContent}>
               <p style={{ color: textColor }}>{description}</p>
               <button onClick={handleClick}>
                  <AnimatedButton.Style1>Learn More</AnimatedButton.Style1>
               </button>
            </div>
         </div>
      </div>
   );
};
