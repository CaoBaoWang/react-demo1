import React from 'react'


class App2 extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state =  {n:0,width:null}
    }

    add=()=> {
        this.setState((state)=>{
            return {n:state.n+1}
        })

    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //
    //     // return true 不阻止 UI 更新
    //     // return false 阻止 UI 更新
    //     return nextState === this.state
    // }

    componentDidMount() {
        console.log('mount') // 首次渲染执行
        // 操作DOM
        const divxxx = document.getElementById('divxxx')
        const width = divxxx.getBoundingClientRect().width
        this.setState({width})
    }

    render() {
        // 执行了 render  n+1  n-1  n的值没变 但是对象的值变了 会重新执行 render 。 DOM是不会变化，应为DOM diff 发现没有变化。就啥都不变
        console.log('render')
        return (
            <div className="App2">App2 <br/>
                <div id="divxxx">{this.state.n}</div>
                <button onClick={this.add}>+1</button>
                div.width= {this.state.width}
            </div>
        )
    }


}
export default App2









