import styles from './Site.module.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import Error404 from "./Error404";


function Site() {
   return <div>
       <div className={styles.header}>Header</div>
       <div className={styles.body}>
           <div className={styles.nav}>
               <NavLink to={'/pageOne'}>PageOne</NavLink>
               <NavLink to={'/pageTwo'}>PageTwo</NavLink>
               <NavLink to={'/pageThree'}>PageThree</NavLink>
               </div>
           <div className={styles.content}>
               <Routes>
                   <Route path={"/*"} element={<Error404/>} />
                   <Route path={"/"} element={<Navigate to={'/pageOne'}/>} />
                   <Route path={"/pageOne"} element={<PageOne/>} />
                   <Route path={"/pageTwo"} element={<PageTwo/>} />
                   <Route path={"/pageThree"} element={<PageThree/>} />
               </Routes>
           </div>
       </div>
   </div>
}

export default Site;
