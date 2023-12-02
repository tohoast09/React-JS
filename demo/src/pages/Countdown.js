import { useState, useEffect } from 'react'


//1. Callback luôn được gọi sau khi component mounted
//2. Cleanup function luôn được gọi trước khi component unmounted
//3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
function Countdown() {
    const [countDown, setCountDown] = useState(180)

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setCountDown(prev => prev -1)
        },1000)

        return () => clearInterval(timerId) 
    },[])

    return (
        <div style={{padding: 30}}>
            <h1>Count Down Page </h1>
            <h2>{countDown}</h2>
        </div>
    )

}

export default Countdown