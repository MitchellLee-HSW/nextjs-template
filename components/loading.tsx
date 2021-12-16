import { CSSProperties, FC } from 'react';
import styles from './loading.module.css';

const Loading: FC<{
  diameter?: string,
  thickness?: string,
  iterationSpeed?: string,
  primaryColour?: string,
  secondaryColour?: string
}> = ({
  diameter = '120px',
  thickness = '16px',
  iterationSpeed = "2s",
  primaryColour = "rgb(34, 203, 255)",
  secondaryColour = "whitesmoke" 
}) => {
  return (
    <span style={{
      width: diameter,
      height: diameter,
      borderWidth: thickness ,
      borderColor: secondaryColour,
      borderTopColor: primaryColour,
      animationDuration: iterationSpeed,
    }} className={styles.loading}></span>
  );
}

export default Loading;