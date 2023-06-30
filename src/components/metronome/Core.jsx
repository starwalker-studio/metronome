import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { stopMetro, action, reset, plusSlider, lessSlider, METRONOME_TEXT } from '../core-functions/environment';
import korg from '../../sound/metronome-click.mp3';
import Beat from '../metronome-beat/Beat';

const Core = () => {

    const playIcon = <FontAwesomeIcon icon={faPlay} size='1x' />
    const stopIcon = <FontAwesomeIcon icon={faStop} size='1x' />
    const [seconds, setSeconds] = useState(1);
    const [play, setPlay] = useState(false);
    const [sliderValue, setSliderValue] = useState(100);
    const result = 60 / sliderValue * 1000;

    useEffect(() => {
        const click = new Audio(korg);
        let timer;
        if (play) {
            timer = setInterval(() => action(click, setSeconds), result);
            return () => clearInterval(timer);
        }
    }, [play, result]);

    reset(seconds, setSeconds);

    return (
        <div>
            <div className='core-container'>
                <div className='metronome-box'>
                    <div className='metronome-bpm'>
                        <div className="metronome-metric" id='metric'>
                            <span>{METRONOME_TEXT.metric}</span>
                        </div>
                        <div className="metronome-val">{sliderValue}</div>
                        <div className="metronome-bpm">{METRONOME_TEXT.bpm}</div>
                    </div>
                    <div className="metronome-bar-flex">
                        <button className='metronome-button' onClick={() => lessSlider(sliderValue, setSliderValue)}>-</button>
                        <div className='wrap-range'>
                            <input type="range" min="0" max="200" value={sliderValue} onChange={e => setSliderValue(e.target.value)}></input>
                        </div>
                        <button className='metronome-button' onClick={() => plusSlider(sliderValue, setSliderValue)}>+</button>
                    </div>
                    <Beat seconds={seconds} />
                    <div className="buttons-flex">
                        {
                            !play ?
                                (<button className='button-start' type='button' onClick={() => setPlay(true)}><span>{playIcon}</span>{METRONOME_TEXT.play_button}</button>) :
                                (<button className='button-stop' type='button' onClick={() => stopMetro(setPlay, setSeconds)}><span>{stopIcon}</span>{METRONOME_TEXT.stop_button}</button>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Core;