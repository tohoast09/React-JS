import {useState, useEffect} from 'react'


export default function Avatar() {
    const [avatar,setAvatar] = useState()

    useEffect(() => {

        return() =>{
            avatar && URL.revokeObjectURL(avatar.prev) //Xóa dữ liệu cũ, tránh rò rĩ bộ nhớ
        }
    },[avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.prev = URL.createObjectURL(file);
        setAvatar(file)
    }

    return (
        <div style ={{padding: 30}}>
            <h1>This is page choice avatar</h1>
            {avatar &&
                (<img src={avatar.prev}></img>)
            }
            <input
                type="file"
                multiple
                onChange={(e) => handlePreviewAvatar(e)}
            />
        </div>
    )

}