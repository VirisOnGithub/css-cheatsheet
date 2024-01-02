import React, { useEffect } from 'react'
import "./HowToCenterADiv.css"
import Prism from "prismjs"
import 'prismjs/themes/prism.css';
import dedent from "dedent";

const HowToCenterADiv = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <h1>Centrer une div</h1>
      <table>
        <tbody>
          <tr>
            <td className='examples'>
              <h2>Avec les flexbox</h2>
              <div className="example">
                <div className="item">
                  <p>Je suis centré</p>
                </div>
              </div>
              <pre>
                <code className='language-css'>
                  {dedent`.flexbox {
                  display: flex;
                  justify-content: center; /* aligne horizontalement */
                  align-items: center; /* aligne verticalement */
                }`}
                </code>
              </pre>
            </td>
            <td className='examples'>
              <h2>Avec les grid</h2>
              <div className="example">
                <div className="item">
                  <p>Je suis centré</p>
                </div>
              </div>
              <pre>
                <code className='language-css'>
                  {dedent`.grid {
                  display: grid;
                  place-items: center;
                }`}
                </code>
              </pre>
            </td>
            <td className='examples'>
              <h2>Avec position absolute</h2>
              <div className="example">
                <div className="item">
                  <p>Je suis centré</p>
                </div>
              </div>
              <pre>
                <code className='language-css'>
                  {dedent`.absolute {
                  position: absolute;
                  top: 50%; /* 50% de la hauteur du parent */
                  left: 50%; /* 50% de la largeur du parent */
                  transform: translate(-50%, -50%); 
                }`}
                </code>
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default HowToCenterADiv