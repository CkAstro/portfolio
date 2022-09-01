import AnimatedButton from './AnimatedButton';
import css from './Style2.module.scss';

type Props = {
   children: React.ReactNode;
};

export const Style2 = ({ children }: Props): JSX.Element => (
   <AnimatedButton
      render={(hasMouseOver: boolean): React.ReactNode => (
         <>
            <div className={`flexCenter ${css.base} ${hasMouseOver ? css.active : ''}`}>
               {children}
            </div>
            <div className={`flexCenter ${css.overlay1} ${hasMouseOver ? css.active : ''}`}>
               {children}
            </div>
            <div className={`flexCenter ${css.overlay2} ${hasMouseOver ? css.active : ''}`}>
               {children}
            </div>
         </>
      )}
   />
);
