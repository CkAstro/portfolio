import css from './Cluster.module.scss';

type Props = {
   children: React.ReactNode;
};

export const Cluster = ({ children }: Props): JSX.Element => (
   <div className={css.cluster}>{children}</div>
);
