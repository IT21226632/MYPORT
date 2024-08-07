
import styles from './style.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useEffect, useRef, useState } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
//   "10.jpg",
//   "11.jpg",
//   "12.jpg",
]

export default function Index() {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});

    const { scrollYProgress } = useScroll({

    target: gallery,
    offset: ['start end', 'end start']

  })

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, -height * 8])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -height * 2])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -height * 4])
//   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  
  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const resize = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
      }
  
      window.addEventListener("resize", resize)
      requestAnimationFrame(raf);
      resize();

      return () => {
        window.removeEventListener("resize", resize);
      }

  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y}/>
          <Column images={[images[3], images[4], images[5]]} y={y2}/>
          <Column images={[images[6], images[7], images[8]]} y={y3}/>
          {/* <Column images={[images[9], images[10], images[11]]} y={y4}/> */}
        </div>
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 

      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill={true}
            />
          </div>
        })
      }
    </motion.div>
  )
}