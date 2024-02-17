import React from 'react'
import loading from '../loading/1495.gif'

const Loading = () => {
    return (
        <div>
            <div className="loading-screen">
                <img className='my3' src={loading} alt="Loading..." />
            </div>
        </div>
    )
}

export default Loading
