import React, { useEffect } from 'react'
import './Notification.css'

const Notification = () => {
  useEffect(() => {
    const notification = document.querySelector('.notification')
    const notificationText = document.querySelector('.notification-text')
    const notificationLoader = document.querySelector('.notification-loader')
    const notificationDisplay = document.querySelector('.notification-display')
    const notificationExplanation = document.querySelector('.notification-explanation')

    notificationDisplay.addEventListener('click', () => {
      notification.classList.toggle('show')
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
      </div>
    </div>
  )
}

export default Notification