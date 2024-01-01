import React from 'react'
import './ItemLink.css'

const ItemLink = (p) => {
  const scrollToOffset = () => {
    p.pararef.current.scrollTo(p.offset)
  }
  return (
    <div className='item'>
        <div className="inside" onClick={scrollToOffset}>
            {p.name}
        </div>
    </div>
  )
}

export default ItemLink