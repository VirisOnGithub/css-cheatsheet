import React from 'react'
import './ItemLink.css'

const ItemLink = (p) => {
  return (
    <div className='item'>
        <div className="inside">
            {p.name}
        </div>
    </div>
  )
}

export default ItemLink