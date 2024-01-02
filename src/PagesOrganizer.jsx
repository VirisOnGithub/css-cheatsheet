import React from 'react'
import { itemNames } from './ItemDisplayer';
import ItemLink from './ItemLink';

const PagesOrganizer = (p) => {
    return (
        <div className='po'>
            {itemNames.map((item, index) => (
                <ItemLink key={index} pararef={p.pararef} name={item} offset={index+2}/>
            ))}
        </div>
    )
};

export default PagesOrganizer