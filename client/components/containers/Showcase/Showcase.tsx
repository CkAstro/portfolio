import { Link } from 'react-router-dom';
import { ActionElement, AnimatedButton } from '@/components';
import css from './Showcase.module.scss';

type Props = {
   title: string | React.ReactNode;
   components: string;
   image: string;
   description: string;
   link: string;
   actionClass?: string;
   className?: string;
};

export const Showcase = ({
   title,
   components,
   image,
   description,
   link,
   actionClass = '',
   className = '',
}: Props): JSX.Element => (
   <ActionElement actionClass={actionClass} onlyOnce className={`${css.showcase} ${className}`}>
      <div className={css.imageContainer}>
         <img src={image} alt={description} />
      </div>
      <div className={css.content}>
         <h1>{title}</h1>
         <h2>{components}</h2>
         <p>{description}</p>
         <Link to={link}>
            <AnimatedButton.Style1>Learn More</AnimatedButton.Style1>
         </Link>
      </div>
   </ActionElement>
);
