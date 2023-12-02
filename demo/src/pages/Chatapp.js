import {useState, useEffect} from 'react'


const lessons = [
    {
        id: 1,
        name: '1. ReactJS',
    },
    {
        id: 2,
        name: '2. Javascript',
    },
    {
        id: 3,
        name: '3. Python',
    }
]


export default function Chatapp() {
    const [clickState, setClickState] = useState(1)

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${clickState}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${clickState}`, handleComment)
        }
        
    }, [clickState])

    return (
        <div style={{padding: 30}}>
            <h1>Chat App Fake</h1>

            <ul>
                {lessons.map((lesson)=>{
                    return (
                        <li 
                        key={lesson.id}
                        onClick={()=> setClickState(lesson.id)} 
                        style = {{
                            color: clickState===lesson.id? 'red':'#333'
                        }}
                        >{lesson.name}</li>
                        
                    )}
                )
                }
            </ul>
        </div>
    )
}