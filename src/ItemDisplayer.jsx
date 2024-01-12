import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

// import items
import HowToCenterADiv from './items/HowToCenterADiv'
import PositioningWithGrid from './items/PositioningWithGrid'
import PositioningWithFlex from './items/PositioningWithFlex'
import Notification from './items/Notification'

export const items = [
    <HowToCenterADiv />,
    <PositioningWithGrid />,
    <PositioningWithFlex />,
    <Notification />
]

export const itemNames = [
    'Centrer une div',
    'L\'organisation avec Grid',
    'L\'organisation avec Flexbox',
    'Les notifications'
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