import styles from './Site.module.css';
// import PageOne from "./PageOne";
// import PageTwo from "./PageTwo";
// import PageThree from "./PageThree";
import {Navigate, NavLink, Route, Routes, useParams} from "react-router-dom";
import Error404 from "./Error404";
// import styled from "styled-components";
import { S } from './__styles';
import {Page} from "./Page";
import {dataState} from "../data/dataState";


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
                <S.NavWrapper><NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}
                                     to={'page/0'}>PageOne</NavLink></S.NavWrapper>
                <S.NavWrapper><NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}
                                     to={'page/1'}>PageTwo</NavLink></S.NavWrapper>
                <S.NavWrapper> <NavLink className={({isActive}) => isActive ? styles.active : styles.navlink}
                                      to={'page/2'}>PageThree</NavLink></S.NavWrapper>


            </div>
            <div className={styles.content}>
                <Routes>
                    {/*<Route path={"/"} element={<Navigate to={'/pageOne'}/>}/>*/}
                    {/*<Route path={"/pageOne"} element={<PageOne/>}/>*/}
                    {/*<Route path={"/pageTwo"} element={<PageTwo/>}/>*/}
                    {/*<Route path={"/pageThree"} element={<PageThree/>}/>*/}
                    {/*<Route path={"/*"} element={<Error404/>}/>*/}
                    <Route path={"/"} element={<Navigate to={'/page/0'}/>}/>
                    <Route path={"/page/:id"} element={<Page pages={dataState.pages}/>}/>
                    <Route path={"/*"} element={<Error404/>}/>
                    <Route path={"/*"} element={<Navigate to={'/page/Error404'}/>}/>
                </Routes>
            </div>
        </div>
    </div>
}

export default Site;
