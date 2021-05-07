import React from "react";

let n = 3
let arr = [5, 3, 4, 2, 1]

const Component = (props) => {
    return (
        <div>
            {n % 2 === 0 ? <div>n是偶数</div> : <div>n是奇数</div>}
        </div>
    )
}

const AppJSX = () => (
    <div className={'red'}>
        {n}
        {n % 2 === 0 ? <div>n是偶数</div> : <div>n是奇数</div>}
        <Component n={n}/>
        <button

            onClick={() => {
                n++
                // ReactDOM.render(AppJSX(), root);
            }}
        >
            +1
        </button>
        <ul>
            {arr.map((item) =>
                <div key={item}>{item}</div>)
            }
        </ul>
    </div>
)


export default AppJSX
