import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

const IMAGE_DATA = [
    {
      src: require('./images/agv.jpg').default,
      alt: 'images-1',
    },
    {
      src: require('./images/robot1.jpg').default,
      alt: 'images-2',
    },
    {
      src: require('./images/robot2.jpg').default,
      alt: 'images-3',
    },
    {
      src: require('./images/robot3.jpg').default,
      alt: 'images-4',
    },
];

ReactDom.render(
    <App 
        items={IMAGE_DATA}
        speed={1.2}
        delay={2.1}
        pause={true}
        autoplay={true}
        dots={true}
        arrows={true}
        size={500}
    />,
    document.getElementById('root')
)