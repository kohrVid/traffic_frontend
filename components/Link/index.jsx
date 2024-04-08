import styles from './styles.module.scss';

export const Link = ({ href, className, onClick, children }) => {
  return (
    <a href={href} className={`${styles.link} ${className}`} onClick={onClick}>
      {children}
    </a>
  );
};
