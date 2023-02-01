import { useEffect, useRef, useState } from 'react'
import carpinchoLaguna from '../../assets/carpinchoLaguna.png'
import carpinchoLagunaWojos from '../../assets/carpinchoLagunaWojos.png'
import useMediaQuery from '../../hooks/useMedia';
import styles from './Carpincho2D.module.css'

const Carpincho2D = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const eye = useRef<HTMLDivElement>(null);


  function calcAngle(element: React.RefObject<HTMLDivElement>) {
    if (!element.current) return;

    let elX = element.current.getBoundingClientRect().left + element.current.clientWidth / 2;
    let elY = element.current.getBoundingClientRect().top + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = (rad * (180 / Math.PI) * -1) + 220;

    return rot;
  }

  const handleMouseMove = (event: MouseEvent) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    if (!isMobile)
      document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (

    <div className=" flex items-center justify-center relative">
      {
        isMobile
          ?
          <img src={carpinchoLagunaWojos} alt="" className="z-50 relative" width={400} />
          :
          <>
            <img src={carpinchoLaguna} alt="" className="z-50 relative" width={400} />
            <div className={styles.coverEyes}></div>
            <div className={styles.eye} ref={eye}
              style={{
                transform: `rotate(${calcAngle(eye)}deg)`,
              }}>
            </div>

          </>
      }
    </div>
  )
}

export default Carpincho2D
