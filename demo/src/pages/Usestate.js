import { useState } from 'react'

const order = [100, 200, 300]

function Usestate() {
    //Components sẽ được render lại sau khi setSate
    //setState với callback
    const total = order.reduce((total, cur) => total + cur) //Khá mất thời gian, vì mỗi khi click vào button thì App sẽ được render lại, dẫn đến total được tính toán lại
    //Thay vào đó có thể sử dụng callback trong useState

    const [counter, setCounter] = useState(() => {
        const total = order.reduce((total, cur) => total + cur)
        console.log(total);
        return total
    })

    const handleIncrease = () => {
        // setCounter(counter+1)
        // setCounter(counter+1)
        // setCounter(counter+1)
        setCounter(prev => prev + 1)
        setCounter(prev => prev + 1)
    }

    const [info, setInfo] = useState({
        name: "hello world",
        age: "18",
    });

    const handleIncrease2 = () => {
        // setInfo({
        //   ...info,
        //   age: "19",
        // })
        setInfo(prev => ({
            ...info,
            bio: 'hello world',
        }))
    }

    const [cars, setCars] = useState(['Bugatti', 'Roll-Royce', 'Maybach']);

    const handleUpdate = () => {
        setCars((prevState) => {
            return [...prevState, 'Lamborghini']
        })
    }
    console.log(cars) // Output: ?
    return (

        <div className="App" style={{ padding: '20vh' }}>
            <h1> UseState page </h1>
            <h1> {counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <h1> {JSON.stringify(info)}</h1>
            <button onClick={handleIncrease2}>Increase</button>
            <h1>ReactJS</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>

    )
}

export default Usestate