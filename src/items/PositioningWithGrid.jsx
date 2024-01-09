import './PositioningWithGrid.css'

import React, { useEffect, useState, useRef } from 'react';

import Prism from "prismjs"
import 'prismjs/themes/prism.css';
import dedent from "dedent";

const PositioningWithGrid = () => {
  const [gridContainerWidth, setGridContainerWidth] = useState(0);
  const gridContainerRef = useRef(null);

  useEffect(() => {
    const gridcontainer = document.querySelector('.gridcontainer');
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width.toFixed(0);
      setGridContainerWidth(width);
      if (width < window.innerWidth / 2.5){
        gridcontainer.style.gridTemplateAreas = `
          "header"
          "sidebar"
          "main"
          "footer"
          `;
        gridcontainer.style.gridTemplateColumns = '1fr';
        gridcontainer.style.gridTemplateRows = '60px 60px auto 60px';
      } else {
        gridcontainer.style.gridTemplateAreas = `
          "header header header"
          "sidebar main main"
          "footer footer footer"
          `;
        gridcontainer.style.gridTemplateColumns = '160px auto';
        gridcontainer.style.gridTemplateRows = '60px auto 60px';
      }
    });

    resizeObserver.observe(gridContainerRef.current);

    return () => {
      resizeObserver.unobserve(gridContainerRef.current);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="gridcontainer" ref={gridContainerRef}>
          <div className="header">header</div>
          <div className="sidebar">sidebar</div>
          <div className="main">main</div>
          <div className="footer">footer</div>
        </div>
      </div>
      <div className="explanation">
        <p>
          Vous pouvez redimensionner la fenêtre pour voir le changement de disposition.
        </p>
        <pre>
          <code className='language-css'>
            {dedent`.gridcontainer {
              display: grid;
              grid-template-areas:
                "header header header"
                "sidebar main main"
                "footer footer footer";
              grid-template-columns: 160px auto;
              grid-template-rows: 60px auto 60px;
            }`}
          </code>
          <div style={{height: 1+'vw'}}></div>
          <code className='language-css'>
            {dedent`.reduced{
              grid-template-areas:
                "header"
                "sidebar"
                "main"
                "footer";
              grid-template-columns: 1fr;
              grid-template-rows: 60px 60px auto 60px;
            }
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default PositioningWithGrid