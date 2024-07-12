import React from 'react'
import styles from  './Pcontrol.module.css'
import './index.css'

function Pcontrol() {
  return (
    <div className={styles.container_p}>

      <div className={styles.item + " " + styles.main + " "           + styles.color1}>main</div>
      <div className={styles.item + " " + styles.color + " "          + styles.color2}>color y talle</div>
      <div className={styles.item + " " + styles.codigo_list + " "    + styles.color3}>codigo list</div>
      <div className={styles.item + " " + styles.nuevo_ingreso + " "  + styles.color4}>nuevo-ingreso</div>
      <div className={styles.item + " " + styles.buttons + " "        + styles.color5}>butones</div>
      <div className={styles.item + " " + styles.busqueda + " "       + styles.color1}>busqueda</div>
      {/* <div className="item item-pic         color2">item picture</div>
      <div className="item fila-de-cobranza color3">fila de cobranza</div> */}

    </div>
  )
}

export default Pcontrol