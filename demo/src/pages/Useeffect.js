import {useEffect, useState} from 'react'
import AvatarPage from './Avatar'
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

const tab = ['posts', 'comments', 'albums']

function Useeffect() {
    //useEffect(callback, [deps]);
    //1. useEffect(callback)
    //  -Gọi callback mỗi khi component rerender
    //  -Gọi callback sau khi component thêm element vào DOM
    //2. useEffect(callback,[])
    //  -Chỉ gọi callback 1 lần sau khi component mounted
    //3. useEffect(callback,[deps])
    //  -Callback sẽ được gọi lại mỗi khi deps thay đổi
//-------------------------------------------
    //1. Callback luôn được gọi sau component mounted
    //2. Cleanup function luôn được gọi trước khi component unmounted
    const [title,setTitle] = useState('')
    const [postsState,setPostsState] = useState([])
    const [apiData,setApiData] = useState(tab[0])
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/${apiData}`)
        .then(res => res.json())
        .then(posts => {
            setPostsState(posts);
        })
        
    }, [apiData]) 
    //Khi thực hiện 1 logic mới thì nên viết ra một useEffect mới
    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY);
            if(window.scrollY >= 200){
                setShowGoToTop(true)
            } else{
                setShowGoToTop(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        //có thể return ra một hàm cleanup function, hàm này sẽ được gọi trước khi component unmounted
        return () =>{
            console.log('unmounting');
            window.removeEventListener("scroll",handleScroll);
        }
    },[])//addEvent chỉ cần gán 1 lần, sau đó nếu có thay đổi thì JS tự bắt được
        
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(posts => {
    //     console.log(posts);
    // }) 
    //Nếu fetch API ở đây => mỗi lần render thì sẽ call api

        // console.log('render 1');
    const [showAvatar, setShowAvatar] = useState(false)
    const handleShowAvatar = () => {
        setShowAvatar(!showAvatar)
    }
    return (
        
        <div style={{padding: 30}}>
            <button onClick={handleShowAvatar}>Show Avatar</button>
            {showAvatar && <AvatarPage/>}
            <hr/>
            {
                tab.map((tab)=>(
                    <button style={apiData === tab ? {color: '#fff', backgroundColor:'#333'} : {} } onClick={()=>setApiData(tab)} key = {tab}>{tab}</button>
                )
                )
            }
            <input 
                value ={title}
                onChange={e => setTitle(e.target.value)}

            />
            <button id={"h1"}> Demo Use Effect</button>
            {console.log('Render')}
            <ul>
                {
                    postsState.map((post,index)=>(
                        <li key={index}>{index}. {post.title || post.name}</li>
                    ))
                }
            </ul>
            {
                showGoToTop && (
                    <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                    >Go To Top</button>
                )
            }
        </div>
    )
}

export default Useeffect