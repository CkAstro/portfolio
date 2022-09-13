import {
   reversiCreateUsername,
   reversiJoinGame,
   reversiStartGame,
   reversiObserveGame,
} from '@/assets';
import css from '../routes.module.scss';

const Page3 = (): JSX.Element => (
   <div className={css.container}>
      <div className={css.content}>
         <h1>Using the App</h1>

         <div className={css.flexSection}>
            <div>
               <h2>Selecting a Username</h2>
               <p>
                  Before beginning, you must select a username. There is currently no log-in
                  involved, but this feature is in the works.
               </p>
            </div>
            <div>
               <img alt="create username" src={reversiCreateUsername} />
            </div>
         </div>

         <div className={css.flexSection}>
            <div>
               <h2>Joining a Game</h2>
               <p>
                  The first section in the game area is the &quot;Join a Game&quot; section. Games
                  waiting on a second player are listed next to the &quot;Start New Game&quot;
                  button.
               </p>
               <p>
                  To join one of these games, simply click on the other player&apos;s name once you
                  have selected a username.
               </p>
            </div>
            <div>
               <img alt="join game" src={reversiJoinGame} />
            </div>
         </div>

         <div className={css.flexSection}>
            <div>
               <h2>Starting a New Game</h2>
               <p>
                  If no games are waiting on a player, or you simply wish to start a new game, click
                  on the &quot;Start New Game&quot; button.
               </p>
               <p>
                  You will be placed in a new game and must wait on an opponent to join. Your game
                  will be visible in the &quot;Join a Game&quot; section for other users (and other
                  browser windows).
               </p>
            </div>
            <div>
               <img alt="start game" src={reversiStartGame} />
            </div>
         </div>

         <div className={css.flexSection}>
            <div>
               <h2>Observing a Live Game</h2>
               <p>
                  If you instead wish to observe a live match, two match types are available under
                  the &quot;Observe Live Games&quot; section.
               </p>
               <p>
                  Those with <span style={{ fontWeight: 'bold', color: 'green' }}>live</span> at the
                  bottom are live matches other players are currently playing. Those with{' '}
                  <span style={{ fontWeight: 'bold', color: 'red' }}>replay</span> at the bottom are
                  replays of previous games.
               </p>
               <p>
                  While live matches are not typically available, replays are always running and
                  ready to be observed.
               </p>
            </div>
            <div>
               <img alt="observe game" src={reversiObserveGame} />
            </div>
         </div>
      </div>
   </div>
);

export default Page3;
