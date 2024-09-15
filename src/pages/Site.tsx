import styles from './Site.module.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";


function Site() {
   return <div>
       <div className={styles.header}>Header</div>
       <div className={styles.body}>
           <div className={styles.nav}>1234</div>
           <div className={styles.content}>
               <PageOne/>
               <PageTwo/>
               <PageThree/>
           </div>
       </div>
   </div>
}

export default Site;
