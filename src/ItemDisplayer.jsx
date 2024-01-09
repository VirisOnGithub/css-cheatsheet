import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

// import items
import HowToCenterADiv from './items/HowToCenterADiv'
import PositioningWithGrid from './items/PositioningWithGrid'

export const items = [
    <HowToCenterADiv />,
    <PositioningWithGrid />
]

export const itemNames = [
    'Centrer une div',
    'L\'organisation avec Grid'
]

const ItemDisplayer = () => {

    return (
        <>
            {items.map((item, index) => (
                <ParallaxLayer offset={index + 2} speed={1} key={index} style={{ backgroundColor: index % 3 === 0 ? '#264de4' : index % 3 === 1 ? '#2965f1' : '#ebebeb' }}>
                    {item}
                </ParallaxLayer>
            ))}
        </>
    );
}

export default ItemDisplayer