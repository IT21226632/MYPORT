
import React from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';


export default function Index({ index, title, description, tech = '', isSelected, setSelectedProject }) {

  const technologies = tech.split(',').map(tech => tech.trim());


    return (
        <motion.div
      className={styles.project}
      initial={{ height: '100px' }}
      animate={{ height: isSelected ? '300px' : '100px' }}
      transition={{ duration: 0.5 }}
      onClick={() => setSelectedProject(isSelected ? null : index)}
    >
    <div className='proBody'>
      <div className='main-div-left'>
      <h2>{title}</h2>
      <p>Design & Development</p>
      </div>
      <div className='inside'>
      {isSelected && (
    <>
      <p>{description}</p>
      <p>Technology</p>
      <div className={styles.technologies}>
        {technologies.map((tech, idx) => (
          <span key={idx} className={styles.tech}>{tech}</span>
        ))}
      </div>
      {/* <p>GitHub Repository</p>
      <p>link</p> */}
    </>
  )} 
      </div>
    </div>
    </motion.div>
  );
}