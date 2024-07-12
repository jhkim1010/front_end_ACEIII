import React from 'react'
import styles from './Scontrol.module.css'

function Scontrol() {
  return (
    <main>
      <div className={styles.container_vcontrol}>

        <div className={styles.item + " " + styles.estado_general_sucursales + " " + styles.color1}>estado_general_sucursales</div>
        <div className={styles.item + " " + styles.total_venta_today         + " " + styles.color3}>total_venta_today</div>
        <div className={styles.item + " " + styles.metodo_de_pago            + " " + styles.color2}>metodo de pago</div>
        <div className={styles.item + " " + styles.clientlist_v              + " " + styles.color3}>clients total list</div>
        <div className={styles.item + " " + styles.botones_s                 + " " + styles.color4}>botones_s</div>
        <div className={styles.item + " " + styles.color_table_v             + " " + styles.color5}>color-table</div>
        <div className={styles.item + " " + styles.date_time_v               + " " + styles.color1}>date & time</div>
        <div className={styles.item + " " + styles.item_pic_v                + " " + styles.color2}>item picture</div>
        <div className={styles.item + " " + styles.fila_de_cobranza          + " " + styles.color3}>fila de cobranza</div>

      </div>

    </main>)
}

export default Scontrol