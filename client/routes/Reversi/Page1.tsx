import { reversi } from '@/assets';
import { AnimatedButton, Icons } from '@/components';
import css from '../routes.module.scss';

const Page1 = (): JSX.Element => (
   <div className={css.container}>
      <img src={reversi} alt="reversi" />
      <div className={css.content}>
         <h1>
            <a
               href="https://github.com/CkAstro/reversi"
               target="_blank"
               rel="noreferrer"
               title="view on github"
            >
               <Icons.GitHub fill="black" size={24} />
            </a>{' '}
            <span style={{ fontWeight: '100' }}>Multiplayer</span> Reversi
         </h1>

         <p>
            Play Reversi (aka Othello) online with your friends in this web-app which supports
            multiple concurrent games, live-game observation, replay mode, and more.
         </p>

         <p>
            The front-end is created in React and uses a Websocket and RESTful API calls to
            communicate with the server. The back-end runs on Node.js with Express to handle those
            API requests and server/client communication. All game logic is done server-side to
            prevent cheating.
         </p>

         <p>Continue reading for instructions.</p>

         <a href="https://reversi.chriskolb.dev" target="_blank" rel="noreferrer">
            <AnimatedButton.Style2>Play Now</AnimatedButton.Style2>
         </a>
      </div>
   </div>
);

export default Page1;
