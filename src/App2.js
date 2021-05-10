import React from 'react'


class App2 extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {n:0}
    }

    add=()=> {
        this.setState((state)=>{
            return {n:state.n+1}
        })

        this.setState((state)=>{
            return {n:state.n-1}
        })
    }
    render() {
        // 执行了 render  n+1  n-1  n的值没变 但是对象的值变了 会重新执行 render 。 DOM是不会变化，应为DOM diff 发现没有变化。就啥都不变
        console.log('render')
        return (
            <div className="App2">App2 <br/>
                {this.state.n}
                <button onClick={this.add}>+1</button>
            </div>
        )
    }


}
export default App2









