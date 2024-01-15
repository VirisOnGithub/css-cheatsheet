import React, { useEffect } from 'react'
import Prism from "prismjs"
import 'prismjs/themes/prism.css';
import dedent from "dedent";
import './Notification.css'

const Notification = () => {
  useEffect(() => {
    const notification = document.querySelector('.notification')
    const notificationText = document.querySelector('.notification-text')
    const notificationLoader = document.querySelector('.notification-loader')
    const notificationDisplay = document.querySelector('.notification-display')

    notificationDisplay.addEventListener('click', () => {
      notification.style.animation = ''
      notification.style.animation = 'slideIn 5s ease-in-out forwards'
      notification.style.transition = 'all 0.5s ease-in-out'
    })
  }, []);
  return (
    <div className="notification-container">
      <div className="notification">
        <span className="notification-text"><p>Heyyyy</p></span>
        <span className="notification-loader"></span>
      </div>
      <button className="notification-display">Montrer la notification</button>
      <div className="notification-explanation">
        <h1>Notification</h1>
        <div className="language-css">
              <pre>
                <code>
                  {dedent`.notification{
                      width: 30vw;
                      height: 20vh;
                      background-color: red;
                      position: absolute;
                      top: 0;
                      left: 0;
                      transform: translateX(-100%);
                  }
                  `
                  }
                </code>
              </pre>
            </div>
      </div>
    </div>
  )
}

export default Notification