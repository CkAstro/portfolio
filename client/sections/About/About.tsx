import { memo } from 'react';
import FrameworksCard from './FrameworksCard';
import IntroContainer from './IntroContainer';
import LanguagesCard from './LanguagesCard';
import ToolsCard from './ToolsCard';
import css from './About.module.scss';

export const About = memo(
   (): JSX.Element => (
      <div className={css.about}>
         <IntroContainer />
         <div className={css.flexColumns}>
            <LanguagesCard />
            <FrameworksCard />
            <ToolsCard />
         </div>
      </div>
   )
);
