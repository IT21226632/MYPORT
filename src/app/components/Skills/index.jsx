import React from 'react'
import styles from './style.module.scss'
import { motion } from 'framer-motion';

import { FaNodeJs, FaReact, FaJava, FaHtml5 } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 70,
      },
    },
}

const skillVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 70,
      },
    },
}



const skills = [
    { skill: "Collaborative" },
    { skill: "Attention to Details" },
    { skill: "Executive Presentation" },
    { skill: "Critical Thinking" },
    { skill: "Problem Solving" },
    { skill: "Excellent Communication" }
]

const languages = [
    { icon: TbBrandJavascript,
        name: "JavaScript"
     },
    { icon: FaJava,
        name: "Java"
     },
    { icon: FaHtml5,
        name: "HTML 5"
     },
    { icon: SiKotlin,
        name: "Kotlin"
     },
    { icon: FaReact,
        name: "ReactJs"
     },
]

const frameworks = [
    { icon: FaNodeJs,
        name: "NodeJs"
      },
      { icon: TbBrandReactNative,
        name: "React Native"
      },
    { icon: RiNextjsLine,
        name: "NextJs"
     },
     { icon: SiTailwindcss,
        name: "Tailwind CSS"
     }
]

const databases = [
    { icon: SiMysql,
        name: "MySql"
     },
    { icon: SiMongodb,
        name: "MongoDB"
     },
    { icon: IoLogoFirebase,
        name: "Firebase"
     }
]

function Index() {
  return (
    <div className={styles.skillMainCon}>
        <div className={styles.skillTitle}>
            <motion.div className={styles.Title}
            initial="hidden"
            whileInView="visible"
            variants={titleVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}>
                My Expertise
            </motion.div>
        </div>
        <div className={styles.skillMainArea}>
            <div className={styles.skillArea}>
                <div className={styles.skillsTitle}>
                    Skills
                </div>
                <div className={styles.skillList}>
                    {skills.map((item, index) => (
                        <motion.div key={index} className={styles.skillItem}
                            initial="hidden"
                            whileInView="visible"
                            variants={skillVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}>
                            {item.skill}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className={styles.TechnologyArea}>
                <div className={styles.skillsTitle}>
                    Technologies
                </div>
                <div className={styles.skillSecTitle}>Programming Languages</div>
                <div className={styles.languagelist}>
                    {languages.map((item, index) => (
                        <motion.div key={index} className={styles.languageItem}
                            initial="hidden"
                            whileInView="visible"
                            variants={skillVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}>
                            <item.icon size={30} opacity={0.5} />
                            <div className={styles.languageItemName}>{item.name}</div>
                        </motion.div>
                    ))}
                </div>
                <div className={styles.skillSecTitle}>Frameworks</div>
                <div className={styles.frameworklist}>
                    {frameworks.map((item, index) => (
                        <motion.div key={index} className={styles.frameworkItem}
                            initial="hidden"
                            whileInView="visible"
                            variants={skillVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}>
                            <item.icon size={30} opacity={0.5} />
                            <div className={styles.languageItemName}>{item.name}</div>
                            
                        </motion.div>
                    ))}
                </div>
                <div className={styles.skillSecTitle}>Databases</div>
                <div className={styles.databaselist}>
                    {databases.map((item, index) => (
                        <motion.div key={index} className={styles.databaseItem}
                            initial="hidden"
                            whileInView="visible"
                            variants={skillVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}>
                            <item.icon size={30} opacity={0.5}/>
                            <div className={styles.languageItemName}>{item.name}</div>
                            
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index
