import React from 'react'
import styles from './Vcontrol.module.css'
import ClientSelected from './units/Client_selected'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Vcontrol() {
  return (
    <main>
      <div className={styles.container_vcontrol}>

        <div className={styles.item + " " + styles.cliente_elegido    + " " + styles.color1}><ClientSelected/></div>
        <div className={styles.item + " " + styles.metodo_de_pago     + " " + styles.color2}>metodo de pago</div>
        <div className={styles.item + " " + styles.clientlist_v       + " " + styles.color3}>clients total list</div>
        <div className={styles.item + " " + styles.list_items_venta_v + " " + styles.color4}>list-items-venta</div>
        <div className={styles.item + " " + styles.color_table_v      + " " + styles.color5}>color-table</div>
        <div className={styles.item + " " + styles.date_time_v        + " " + styles.color1}>date & time</div>
        <div className={styles.item + " " + styles.item_pic_v         + " " + styles.color2}>item picture</div>
        <div className={styles.item + " " + styles.fila_de_cobranza   + " " + styles.color3}>fila de cobranza</div>

      </div>
  
    </main>)
}

export default Vcontrol; 
