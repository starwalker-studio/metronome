import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const moon = <FontAwesomeIcon icon={faMoon} size='1x' />
const light = <FontAwesomeIcon icon={faLightbulb} size='1x' />

export const stopMetro = (setPlay, setSeconds) => {
    setPlay(false);
    setSeconds(1);
};

export function action(click, setSeconds) {
    click.play();
    click.currentTime = 0;
    setSeconds(seconds => seconds + 1);
}

export function reset(seconds, setSeconds) {
    seconds === 5 && setSeconds(1);
}

export const plusSlider = (sliderValue, setSliderValue) => {
    const moreThan = (sliderValue >= 200) ? true : false;
    if (!moreThan) {
        setSliderValue(parseInt(sliderValue) + 1);
    }
}

export const lessSlider = (sliderValue, setSliderValue) => {
    const lessthan = (sliderValue <= 0) ? true : false;
    if (!lessthan) {
        setSliderValue(parseInt(sliderValue) - 1);
    }
}

export const swichTheme = (theme, setTheme, setChecked, e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setChecked(e.target.checked);
}

export function switchIcons(checked) {
    return checked ? light : moon;
}

export const INFO = {
    main_title: "How to use the Metronome?",
    desc: "Metronome is an instrument that plays steady beats to help the musician play rhythmically. Tempo is measured in BPM (beats per minute). " +
        "For example, a tempo of 60 BPM is equal to one beat per second, while a tempo of 120 BPM is equal to two beats per second. " +
        "Typically, the metronome is used as an additional tool to help maintain a steady tempo when creating music. " +
        "You can also use it in live performances and recording studios to maintain the correct tempo as you play. "
}

export const TEXT_BLOCK = [
    { id: 1, title: "Set the tempo" },
    { id: 2, text: "Move the slide or click the plus or minus buttons to set the tempo of the metronome." },
    { id: 3, title: "Press the Start button" },
    { id: 4, text: "Press the Start button and the metronome will start. To stop the metronome use the red button." }
]

export const METRONOME_TEXT = {
    title: "Metronome",
    metric: "4/4",
    bpm: "BPM",
    play_button: " Start",
    stop_button: " Stop"
}