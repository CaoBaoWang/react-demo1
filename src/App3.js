import React, {useState, useEffect} from "react";


const App3 = () => {
    const [n, setN] = useState(0)
    const [m, setM] = useState(0)

    // 模拟 componentDidMount
    useEffect(() => {
        console.log('App3 mount')
    }, [])

    // // 模拟 componentDidUpdate
    // useEffect(() => {
    //     console.log('m 或 n 变了')
    // //   m n 初始化也算 变
    // }, [m, n])

    // 自定义Hook模拟 componentDidUpdate  n初始化不算变化 start
    const useX = (n)=> {
        const [nUpdateCount , setNUpdateCount] = useState(0)
        useEffect(()=>{
            setNUpdateCount(nUpdateCountX => nUpdateCountX +1)

        },[n])

        return {
            nUpdateCount
        }
    }
    const {nUpdateCount} = useX(n)
    useEffect(()=>{
        if(nUpdateCount>1){
            console.log('n 变化了')
        }

    },[nUpdateCount])

    // 模拟 componentDidUpdate  n初始化不算变化end


    const addN = () => {
        setN(n + 1)
    }
    const addM = () => {
        setM(m + 1)
    }

    let [childVisible,setChildVisible] = React.useState(true)
    const hideChild = ()=> setChildVisible(false)
    const visibleChild = ()=> setChildVisible(true)


    return <div className="App">
        App3 <br/>
        n= {n} <br/>
        m = {m}<br/>

        <button onClick={addN}>n+1</button>
        <button onClick={addM}>m+1</button><br/>

        {childVisible?<Child/>:null}
        <button onClick={visibleChild}>visible</button>
        <button onClick={hideChild}>hide</button>
    </div>
}

const Child = ()=>{

    // 模拟 componentWillUnmount
    useEffect(() => {
        console.log('Child第一次渲染')
        return () => {
            console.log("Child组件要死了")
        }
    })
    return (
        <div>Child</div>
    )
}

export default App3
