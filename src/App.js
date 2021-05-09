import React from "react";


class Component extends React.Component {

    // 已经过时，被重命名 不推荐使用了
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('props 变化了')
        console.log('当前props')
        console.log(this.props);
        console.log('新的props')
        console.log(nextProps);
    }

    constructor(props) {
        super(props)
        console.log(this.props.n)
    }

    render() {
        return (
            <div>
                {this.props.n % 2 === 0 ? <div>n是偶数</div> : <div>n是奇数</div>}

                <button onClick={this.props.addN}>+1</button>

            </div>
        )
    }
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {n: 0, history: []}


    }

    addN = () => {
        const n = this.state.n+1
        const histroy = this.state.history
        histroy.push(n)
        this.setState( {n,histroy})
    }

    render() {
        return (
            <div className={'red'}>
                {this.state.n}

                <Component n={this.state.n} addN={this.addN}/>
                <ul>
                    {this.state.history.map((item) =>
                        <div key={item}>{item}</div>)
                    }
                </ul>
            </div>
        )
    }


}


export default App
