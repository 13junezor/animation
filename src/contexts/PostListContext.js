import {createContext, useEffect, useState } from "react";

const PostListContext = createContext()

const PostListProvider = ({children}) => {
const [postos, setPostos] = useState([])

const addNewPost = (title, text, img, tag) => {
    setPostos(prev => [...prev, {
      id: Date.now(),
      title,
      text,
      img,
      tag,
        }])  

      }

      const deletePost = (id) => {
        setPostos(prev => prev.filter(pos => pos.id !== id))
      }
      const LSPostKey = 'postos'
useEffect(() => {
const dataFromLs = localStorage.getItem(LSPostKey)
if (dataFromLs) {
setPostos(JSON.parse(dataFromLs))
}
}, [])

useEffect(() => {
localStorage.setItem(LSPostKey, JSON.stringify(postos))
}, [postos])

    return(
        <PostListContext.Provider value={{postos, addNewPost, deletePost}}>
{
    children
}
        </PostListContext.Provider>
    )
}
export default PostListProvider

export {
    PostListContext
}
