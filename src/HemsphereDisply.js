import React from 'react'
import './style.css';
import northPic from './image/north.png'
import southPic from './image/south.jpg'


const hemisphereConfig = {
    northern: {
        text: 'it is norhtern hemisphere',
        picture: northPic
    },
    southern: {
        text: 'it is south hemisphere',
        picture: southPic
    }
}
const HemsphereDisply = ({latitude}) => {

    const hemisphere = latitude > 0? 'northern' : 'southern';
    const {text, picture} = hemisphereConfig[hemisphere];
    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                <img src={picture} alt='pic' />
                </div>
                <div className='ui teal bottom attached label'>
                   <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}



export default HemsphereDisply;