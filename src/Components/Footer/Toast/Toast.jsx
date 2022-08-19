import React, { useState } from 'react'
import './Toast.css'

function Toast ({toastText}) {

    return (
        <div className="toast-container">
            <div className="toast-wrapper">
                <div className="toast-content">
                    <p>{toastText}</p>
                </div>
            </div>
        </div>
    )
}

export default Toast;