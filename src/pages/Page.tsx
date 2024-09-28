import React, {Component} from 'react';
import {PageType} from "../data/dataState";
import {useParams} from "react-router-dom";
import Error404 from "./Error404";


type PropsType = {
    pages: PageType[]
}

export const Page: React.FC<PropsType> = ({pages}) =>
{
    let params = useParams()

    return <div>
        {pages[Number(params.id)] ?
            <div>
                <div>{pages[Number(params.id)].heading}</div>
                <div>{pages[Number(params.id)].about}</div>
            </div> : <Error404/>}

    </div>
}
