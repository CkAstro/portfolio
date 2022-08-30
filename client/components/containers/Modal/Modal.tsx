/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate, Outlet, Navigate, useParams } from 'react-router-dom';
import { routes } from '@/routes';
import css from './Modal.module.scss';

export const Modal = (): JSX.Element => {
   const navigate = useNavigate();
   const { topic, page } = useParams(); // these will always exist in this component

   const route = routes[topic!];
   if (route === undefined) return <Navigate replace to="/" />;
   const currentPage = route[page ?? 'default']!;
   const pageNumber = currentPage.id;
   const pageCount = Object.keys(route).length - 1;

   const handleClick = (event: React.MouseEvent): void => event.stopPropagation();
   const handleClose = (): void => navigate('/');

   const toNextPage = (): void => navigate(`/content/${topic!}/${currentPage.next}`);
   const toPrevPage = (): void => navigate(`/content/${topic!}/${currentPage.prev}`);

   return (
      <div className={css.container} onClick={handleClose}>
         <div className={css.modal} onClick={handleClick}>
            <div className={css.topBar}>
               <button className={css.close} onClick={handleClose}>
                  <div>&times;</div>
               </button>
            </div>
            <div className={css.content}>
               <Outlet />
            </div>
            <div className={css.bottomBar}>
               <button className={css.prev} onClick={toPrevPage}>
                  <div>&#x27A4;</div>
               </button>
               <div className={css.page}>
                  {pageNumber} of {pageCount}
               </div>
               <button className={css.next} onClick={toNextPage}>
                  <div>&#x27A4;</div>
               </button>
            </div>
         </div>
      </div>
   );
};
