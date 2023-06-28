import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Core = () => {

    const play = <FontAwesomeIcon icon={faPlay} size='1x'/>

    return (
        <div className='core-container'>
            <div className='metronome-box'>
                <div className='metronome-bpm'>
                    <div className="metronome-metric" id='metric'>
                        <span>4/4</span>
                    </div>
                    <div className="metronome-val">
                        120
                    </div>
                    <div className="metronome-bpm">BPM</div>
                </div>
                <div className="metronome-bar-flex">
                    <button className='metronome-button'>-</button>
                    <div className='wrap-range'>
                        <input type="range" min="0" max="200"></input>
                    </div>
                    <button className='metronome-button'>+</button>
                </div>
                <div className="metronome-beat">
                    <th><svg className="beat-circle" width="36" height="36" fill="gainsboro">
                        <circle cx="14" cy="14" r="14" />
                    </svg></th>
                    <th><svg className="beat-circle" width="36" height="36" fill="gainsboro">
                        <circle cx="14" cy="14" r="14" />
                    </svg></th>
                    <th><svg className="beat-circle" width="36" height="36" fill="gainsboro">
                        <circle cx="14" cy="14" r="14" />
                    </svg></th>
                    <th><svg className="beat-circle" width="36" height="36" fill="gainsboro">
                        <circle cx="14" cy="14" r="14" />
                    </svg></th>
                </div>
                <div className="buttons-flex">
                    <button className='start-button' type='button'><span>{play}</span> Start</button>
                </div>
            </div>
        </div>
    )
}

export default Core;