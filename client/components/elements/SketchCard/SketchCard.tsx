import { ActionElement } from '@/components';
import css from './SketchCard.module.scss';

type Props = {
   cardDelay?: number;
   style?: React.CSSProperties;
   className?: string;
   children: React.ReactNode;
};

export const SketchCard = ({
   cardDelay = 0,
   style = {},
   className = '',
   children,
}: Props): JSX.Element => (
   <ActionElement
      actionClass={css.active}
      onlyOnce
      style={{ '--card-delay': `${cardDelay}s`, ...style } as React.CSSProperties}
      className={`${css.sketchCard} ${className}`}
   >
      {children}
   </ActionElement>
);
