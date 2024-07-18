import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './anim';
import Round from '../Rounded'
import { FaGraduationCap } from "react-icons/fa6";


export default function Index() {

    const phrase = 'I am passionate about coding, designing, and developing innovative and creative solutions. I thrive on turning complex problems into user-friendly applications.';
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                
                <div className={styles.left}>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span className={styles.mask} key={index}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                <div className={styles.education}>
                    {/* <div className={styles.educationItem}>
                        
                        <div className={styles.educationItemText}>
                           <div className={styles.educationItemTextName}>
                                Advance Level
                           </div>
                           <div className={styles.educationItemTextdetails}>
                                <span>A/ Central College <br></br>2017 - 2019</span>
                           </div>
                        </div>
                    </div> */}
                    <div className={styles.educationTitle}>Education</div>
                    <div className={styles.educationItem}>
                       <div className={styles.educationItemImage}>
                       <FaGraduationCap size={50}/>
                       </div>
                        <div className={styles.educationItemText}>
                           <div className={styles.educationItemTextdetails}>
                                <span>BSc (Hon&apos;s) in Information Technology Specializing Software Engineering<br/>Sri Lanka Institute of Information Technology <br></br>2021 - Present</span>
                           </div>
                        </div>
                    </div>
                   
                </div>
                </div>
                
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>My goal is to leverage my technical skills and creativity to make a positive impact through technology.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    
                    <Round className={styles.button}>
                        <p>About me</p>
                    </Round>
                    
                </div>
            </div>
        </div>
    )
}