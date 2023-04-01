import React from 'react';
import preloaderSpinner from '../../../assets/img/spinner.gif'


export default function PreloaderSpinner(props) {
    return (
        <div className="PreloaderWrapp">
            <img className='PreloaderItem' src={preloaderSpinner} alt="" />
        </div>
    )
}