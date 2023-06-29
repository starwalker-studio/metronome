import React from 'react';
import Core from './components/metronome/Core';

const App = () => {
  return (
    <div>
      <section className='headline'>
        <div className="headline-container">
          <div className='headline-text'>Metronome</div>
        </div>
        </section>      
      <section className='metronome-section'>
        <Core />
      </section>
      <section className='info'>
        <div className='info-container'>
          <h2 className="main-title">How to use the Metronome?</h2>
          <div className="text-block" id='info'>
            <ol>
              <li>
                <h3>Set the tempo</h3>
                <p>Move the slide or click the plus or minus buttons to set the tempo of the metronome.</p>
              </li>
              <li>
                <h3>Press the Start button</h3>
                <p>Press the Start button and the metronome will start. To stop the metronome use the red stop button.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;