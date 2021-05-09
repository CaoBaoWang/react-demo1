import React from "react";


class Component extends React.Component {

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
