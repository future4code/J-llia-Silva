import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';//
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading=()=>{
    return(
        <div>
            <h1>Carregando mami, calmaê</h1>
            <CircularProgress/>
        </div>
    )
}

export default Loading