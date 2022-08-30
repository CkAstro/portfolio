import { reversiShowcase } from '@/assets';
import { Showcase } from '@/components';
import css from './Reversi.module.scss';

export const Reversi = (): JSX.Element => (
   <Showcase
      title={
         <span style={{ fontWeight: '100' }}>
            Multiplayer <span style={{ fontWeight: '700' }}>Reversi</span>
         </span>
      }
      components="React / Node / MongoDB / Websockets"
      image={reversiShowcase}
      description="Online multi-player board game. Supports multiple games, observer mode, and replays."
      link="content/reversi"
      actionClass={css.active}
   />
);
