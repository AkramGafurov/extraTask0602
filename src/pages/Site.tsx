import styles from './Site.module.css';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import Error404 from "./Error404";
import styled from "styled-components";


function Site() {
    return <div>
        <div className={styles.header}>Header</div>
        <div className={styles.body}>
            <div className={styles.nav}>
                {/*<NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}*/}
                {/*         to={'/pageOne'}>PageOne</NavLink>*/}
                {/*<NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}*/}
                {/*         to={'/pageTwo'}>PageTwo</NavLink>*/}
                {/*<NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}*/}
                {/*         to={'/pageThree'}>PageThree</NavLink>*/}
                <NavWrapper><NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}
                                     to={'/pageOne'}>PageOne</NavLink></NavWrapper>
                <NavWrapper><NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}
                                     to={'/pageTwo'}>PageTwo</NavLink></NavWrapper>
                <NavWrapper> <NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}
                                      to={'/pageThree'}>PageThree</NavLink></NavWrapper>


            </div>
            <div className={styles.content}>
                <Routes>
                    <Route path={"/"} element={<Navigate to={'/pageOne'}/>}/>
                    <Route path={"/pageOne"} element={<PageOne/>}/>
                    <Route path={"/pageTwo"} element={<PageTwo/>}/>
                    <Route path={"/pageThree"} element={<PageThree/>}/>
                    <Route path={"/*"} element={<Error404/>}/>

                </Routes>
            </div>
        </div>
    </div>
}

const NavWrapper = styled.div`
    margin-left: 10px;

    & > a {
        color: #282c34;
        text-decoration: none;
    }

    & > a.active {
        color: #7fb8f1;
        text-decoration: underline;
    }

    & > a:hover {
        color: steelblue;
    }
`


export default Site;
