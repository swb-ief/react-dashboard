import React from 'react'

function Contributors() {
    return (
        <div className='contributors'>
           <img className='contributorItem' src={require('../iith.png').default} alt="" />
           <img className='contributorItem' src={require('../ief.png').default} alt="" />
        </div>
    )
}

export default Contributors
