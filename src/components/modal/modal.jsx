import React, { useEffect, useState } from 'react';
import "./modal.css";

// export default function Modal (active, setActive) {
export default function Modal (props) {
    const addBlock =   <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
                            <div className={props.active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                                {props.children}
                            </div>
                        </div>

    return addBlock; 
}