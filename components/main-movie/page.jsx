import Image from 'next/image'
import React from 'react'
import styles from "./style.module.css"
import mainImage from "../../assets/blackpanter.jpeg"
import panther from "../../assets/panther.png"
const MainMovie = () => {
  return (
    <div className={styles.container}>
      <Image src={mainImage} fill />
      <div className={styles.mask}>
        <Image src={panther} width={550} />
      </div>
    </div>
  )
}

export default MainMovie
