import css from './SketchCard.module.scss';

type Props = {
   percent: number;
   itemDelay?: number;
   style?: React.CSSProperties;
   className?: string;
   children: React.ReactNode;
};

export const SketchItem = ({
   percent,
   itemDelay = 0,
   style = {},
   className = '',
   children,
}: Props): JSX.Element => (
   <div
      style={{ '--item-delay': `${itemDelay}s`, ...style } as React.CSSProperties}
      className={`${css.sketchItem} ${className}`}
   >
      <div
         style={{ '--width': `${percent}%` } as React.CSSProperties}
         className={css.sketchItemBar}
      >
         {`${percent}% | `}
         {children}
      </div>
   </div>
);
