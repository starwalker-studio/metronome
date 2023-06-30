import React from 'react'
import { INFO, TEXT_BLOCK } from '../core-functions/environment';

const Info = () => {
    return (
        <div>
            <div className='info-container'>
                <div className='info-p'>
                    <h2 className="main-title">{INFO.main_title}</h2>
                    <div className="text-block" id='info'>
                        <ol>
                            {
                                TEXT_BLOCK.map(i => (
                                    <li key={i.id}>
                                        <h3>{i.title}</h3>
                                        <p>{i.text}</p>
                                    </li>
                                ))
                            }
                        </ol>
                        <div className='text-desc' id='description'>
                            <p>{INFO.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info