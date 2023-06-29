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