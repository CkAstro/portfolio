import { useState } from 'react';
import css from './AnimatedButton.module.scss';

type Props = {
   render: (hasMouseOver: boolean) => React.ReactNode;
   className?: string;
};

const AnimatedButton = ({ render, className = '', ...rest }: Props): JSX.Element => {
   const [hasMouseOver, setHasMouseOver] = useState(false);
   const handleTouch = (event: React.TouchEvent): void => event.stopPropagation();

   return (
      <div
         className={`noselect ${css.button} ${className}`}
         onMouseEnter={(): void => setHasMouseOver(true)}
         onMouseLeave={(): void => setHasMouseOver(false)}
         onTouchStart={handleTouch}
         onTouchEnd={handleTouch}
         // eslint-disable-next-line react/jsx-props-no-spreading
         {...rest}
      >
         {render(hasMouseOver)}
      </div>
   );
};

export default AnimatedButton;
