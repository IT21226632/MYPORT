import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion';


function Index() {
  return (
    <div className={styles.serviceMainCon}>
        <div className={styles.serviceMainArea}>
            <div className={styles.Title}>What I Do</div>
            <div className={styles.Description}>As a versatile developer and designer, I specialize in creating seamless digital experiences across multiple platforms.</div>
            <div className={styles.Description}> My core competencies include</div>
            <div className={styles.ServiceArea}>
                <motion.div className={styles.ServiceRow}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0 }}>
                    <div className= {styles.ServiceItem}>
                        <div className={styles.ServiceItemImage}>
                            <Image src="/images/ui1.png" width={50} height={50} alt=""></Image>
                        </div>
                        <div className={styles.ServiceItemDetail}>
                            <div className={styles.ServiceItemTitle}>UI / UX Designing</div>
                           
                            <span className={styles.ServiceItemDetails}>Creating visually stunning and intuitive user interfaces is my passion</span>
                        </div>
                    </div>
                    <div className= {styles.ServiceItem}>
                        <div className={styles.ServiceItemImage}>
                            <Image src="/images/WEB1.png" width={50} height={50} alt=""></Image>
                        </div>
                        <div className={styles.ServiceItemDetail}>
                            <div className={styles.ServiceItemTitle}>Web Development</div>
                           
                            <span className={styles.ServiceItemDetails}>Developing high-quality, responsive websites that perform efficiently across all devices.</span>
                        </div>
                    </div>
                    <div className= {styles.ServiceItem2}></div>
                </motion.div>
                <motion.div className={styles.ServiceRow}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}>
                    <div className= {styles.ServiceItem2}></div>
                    <div className= {styles.ServiceItem}>
                        <div className={styles.ServiceItemImage}>
                            <Image src="/images/MOB.png" width={50} height={50} alt=""></Image>
                        </div>
                        <div className={styles.ServiceItemDetail}>
                            <div className={styles.ServiceItemTitle}>Mobile Development</div>
                           
                            <span className={styles.ServiceItemDetails}>Creating intuitive mobile applications for both iOS and Android platforms.</span>
                        </div>
                    </div>
                    <div className= {styles.ServiceItem}>
                        <div className={styles.ServiceItemImage}>
                            <Image src="/images/sup.png" width={50} height={50} alt=""></Image>
                        </div>
                        <div className={styles.ServiceItemDetail}>
                            <div className={styles.ServiceItemTitle}>Maintenance & Support</div>
                           
                            <span className={styles.ServiceItemDetails}>Offering continuous support and updates to keep your digital products secure and functional.</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Index