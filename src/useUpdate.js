import {useEffect, useState} from "react";

const useUpdate = (fn, dep) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(countX => countX + 1)

    }, [dep])


    useEffect(() => {
        if (count > 1) {
            fn()
        }
    }, [count,fn])


}

export default useUpdate
