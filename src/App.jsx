import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Table from './Table'

const App = () => {
  const ref = useRef(null)
  const cssurl = 'src/assets/css.svg'
  const NbPages = 2
  return (
    <Parallax pages={NbPages} style={{ top: '0', left: '0'}} ref={ref}>
      <ParallaxLayer 
        sticky={{start: 0, end: 0.1}} 
        style={{display: 'grid', placeItems: 'center'}}
        onClick={() => ref.current.scrollTo(1)}
      >
          <img src={cssurl} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} factor={3} style={{ backgroundColor: '#264de4' }} />
      <ParallaxLayer offset={0} speed={1.5} style={{ backgroundColor: '#2965f1' }} />
      <ParallaxLayer offset={0} speed={2} style={{ backgroundColor: '#ebebeb'}} />
      <ParallaxLayer offset={1} speed={1}>
        <Table />
      </ParallaxLayer>
    </Parallax>
  )
}

export default App