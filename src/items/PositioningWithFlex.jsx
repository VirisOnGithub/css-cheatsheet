import React from 'react'
import './PositioningWithFlex.css'
import Prism from "prismjs"
import 'prismjs/themes/prism.css';
import dedent from "dedent";

const PositioningWithFlex = () => {
  return (
    <div className="container2">
        <div className="flex-container2">
            <input className='name2' type="text" placeholder="Username" />
            <input className='password2' type="text" placeholder="Password" />
            <button className='button2' onClick={auth}>Login</button>
        </div>
        <div className="explanation2">
            <h1>Positionner avec les FlexBox</h1>
            <div className="language-css">
              <pre>
                <code>
                  {dedent`.name2{
                      flex: 1 0 140px; /* flex-grow, flex-shrink, flex-basis */
                  }

                  .password2{
                      flex: 1 0 120px;
                  }

                  .button2{
                      flex: 1 0 60px;
                  }
                  /*
                  flex-grow définit l'agrandissemet de l'élément par rapport aux autres dans le conteneur si il n'est pas rempli
                  flex-shrink définit la réduction de l'élément par rapport aux autres dans le conteneur si il est trop petit
                  flex-basis définit la taille de l'élément dans le conteneur                  
                  */
                  `
                  }
                </code>
              </pre>
            </div>
        </div>
    </div>
  )
}

const auth = () => {
  const name = document.querySelector('.name2').value
  const password = document.querySelector('.password2').value
  if(name === 'admin' && password === 'admin'){
    confirm('Vous êtes connecté') ? window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ') : window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  } else {
    confirm('Identifiants incorrects') ? window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ') : window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }
}

export default PositioningWithFlex