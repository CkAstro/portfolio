import { datavisSessions1, datavisSessions2, datavisSessions3 } from '@/assets';
import css from '../routes.module.scss';

const Page4 = (): JSX.Element => (
   <div className={css.container}>
      <div className={css.content}>
         <h1>Using the App - Saving and Loading Sessions</h1>

         <p>
            The app allows you to save sessions, including camera options, display items, and item
            settings. Loading textures is currently not supported.
         </p>

         <div className={css.flexSection}>
            <div>
               <h2>Session Buttons</h2>
               <p>
                  The <b>save</b> and <b>load</b> session buttons are available in the main display
                  section and are pictured to the right.
               </p>
            </div>
            <div>
               <img alt="session tools" src={datavisSessions1} />
            </div>
         </div>

         <div className={css.flexSection}>
            <div>
               <h2>Saving a Session</h2>
               <p>
                  Clicking the <b>save session</b> button will bring up the window pictured to the
                  right. Simply choose a session name and click the &quot;save&quot; button.
               </p>
               <p>
                  The session will be stored as a cookie, so clearing cookies will erase the
                  session. Server-side support is coming soon.
               </p>
            </div>
            <div>
               <img alt="saving a session" src={datavisSessions2} />
            </div>
         </div>

         <div className={css.flexSection}>
            <div>
               <h2>Loading a Session</h2>
               <p>
                  Clicking the <b>load session</b> button will bring up the window pictured to the
                  right, with a list of all saved sessions. Clicking on a session will immediately
                  load it.
               </p>
               <p>
                  To delete a saved session, click the &apos;&times;&apos; button. A confirmation
                  will pop up asking you to click the &apos;&times;&apos; button a second time.
                  Doing this will delete the session.
               </p>
            </div>
            <div>
               <img alt="loading a session" src={datavisSessions3} />
            </div>
         </div>
      </div>
   </div>
);

export default Page4;
