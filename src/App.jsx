import React, { useEffect, useState } from 'react';
import { swichTheme, switchIcons, METRONOME_TEXT } from './components/core-functions/environment';
import Core from './components/metronome/Core';
import useLocalStorage from 'use-local-storage';
import Info from './components/info-section/Info';
import Footer from './components/footer-section/Footer';

const App = () => {

  const [checked, setChecked] = useState(false);  
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  useEffect(() => { setTheme('light') }, [setTheme]);

  return (
    <div data-theme={theme}>
      <section className='headline'>
        <div className="headline-container">
          <div className="headline-flex">
            <div className='headline-text'>{METRONOME_TEXT.title}</div>
            <div className='modes-flex'>
              <div className='label-check'>
                <label className="switch">
                  <input type="checkbox" onChange={e => { swichTheme(theme, setTheme, setChecked, e); }} checked={checked} />
                  <span className="slider round"></span>
                </label>
                <div className='label-text'>{switchIcons(checked)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='metronome-section'>
        <Core />
      </section>
      <section className='info'>
        <Info />
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </div>
  )
}

export default App;