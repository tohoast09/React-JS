import {useEffect, useState} from 'react'
/*
Side effect: khi thay đổi dữ liệu thì chương trình thay đổi
1. Update DOM
2. Call API
3. Listen DOM events
    -Scroll
    -Resize
4. Cleanup
    -Remove listener / Unsubscribe
    -Clear timer
*/

function Useeffect() {
    //useEffect(callback, [deps]);
    //1. useEffect(callback)
    //  -Gọi callback mỗi khi component rerender
    //  -Gọi callback sau khi component thêm element vào DOM
    //2. useEffect(callback,[])
    //3. useEffect(callback,[deps])
//-------------------------------------------
    //1. Callback luôn được gọi sau component mounted
    const [title,setTitle] = useState('')
    useEffect(
        () =>{
            console.log('Mounted');
            document.title = title
        }
        
    )
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(posts => {
    //     console.log(posts);
    // }) 
    //Nếu fetch API ở đây => mỗi lần render thì sẽ call api

        // console.log('render 1');
    return (
        <div style={{padding: 30}}>
            <input 
                value ={title}
                onChange={e => setTitle(e.target.value)}

            />
            <button id={"h1"}> Demo Use Effect</button>
            {console.log('Render')}
        </div>
    )
}

export default Useeffect