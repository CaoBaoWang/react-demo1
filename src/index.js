import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const root = document.querySelector('#root')

let n = 0
const App =()=> React.createElement('div', {className: 'red',},
    [
        n,
        React.createElement('button', {
                onClick: () => {
                    n++
                    console.log(n)
                    ReactDOM.render(App(), root);
                }
            },
            "+1"
        )
    ]
)

ReactDOM.render(App(), root);
