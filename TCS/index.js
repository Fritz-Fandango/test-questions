import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import TCSButton from './components/TCSButton/TCSButton';
import './style.css';

/*
 * Code was originally added here: https://stackblitz.com/edit/react-ugm94r
 */

const App = () => {
  const buttonArr = ['male', 'female', 'other'];

  const [activeButton, setActiveButton] = useState('male');

  useEffect(() => {
    const msg = document.getElementById('activeButtonMessg');

    msg.innerHTML = `You clicked "${activeButton}"`;
  });

    return (
      <div>
      {buttonArr.map(button =>
        <TCSButton
        buttonVal={button}
        activeButton={activeButton}
        onClick={() => setActiveButton(button)}
        />
      )}
      <p id="activeButtonMessg"></p>
      </div>
    );
}

render(<App />, document.getElementById('root'));
