import Image from 'next/image';
import styles from './ClickableImage.module.css';

const ClickableImage = ({ href, src, alt, width, height }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} width={width} height={height} className={styles.image} />
    </a>
  );
};

export default ClickableImage;
