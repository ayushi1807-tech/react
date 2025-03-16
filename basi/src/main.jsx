import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const anotherUser = "chai aur react"
const reactElement = React.createElement(
    'a',
    {href : 'https:google.com',target:'_blank'},
    'Click me to visit Google',
    anotherUser
)

const anotherElement = (
    <a href='https://google.com' target='_blank'> visit google</a>
)


createRoot(document.getElementById('root')).render(

    // reactElement
    reactElement,
    <App />
 
 
)
