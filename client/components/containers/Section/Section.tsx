import { Element } from 'react-scroll';
import css from './Section.module.scss';

type Props = {
   navId: string;
   style?: React.CSSProperties;
   hasContent?: boolean;
   children: React.ReactNode;
};

export const Section = ({ navId, style, hasContent, children }: Props): JSX.Element => (
   <Element name={navId} id={navId} style={style} className={css.section}>
      <div className={hasContent! ? css.content : css.noContent}>{children}</div>
   </Element>
);
