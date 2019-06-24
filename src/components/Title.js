import React from 'react';
import style from './Title.css';


const Title = props => 
    <div className={style.titleIn}>
        <h1>{props.title}</h1> 
        <p>Number of tasks: {props.taskNumber}</p>
    </div>

export default Title;