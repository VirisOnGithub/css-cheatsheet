import React from 'react';
import './Table.css';
import ItemLink from './ItemLink';
import items from './items.json';

const Table = (e) => {
    return (
        <div className='bigcontainer'>
            {items.map((item) => (
                <ItemLink key={item.name} name={item.name} pararef={e.pararef} offset={item.offset} />
            ))}
        </div>
    );
};

export default Table