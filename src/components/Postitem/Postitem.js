import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PostListContext } from "../../contexts/PostListContext"
import './styles.css'
const Postitem = ({id, title, text, img, tag, index}) => {
  const navigate = useNavigate()  
const {deletePost} = useContext(PostListContext)

const deleteHandler = () => deletePost(id)

 return (
   <>
        <div className="container post">
          <h1 className="media-heading">{index+1}. {title}</h1>
        <p>{text}</p>
        <div className="text-center">
       <img src={img} className="rounded pict" alt=""/>
        </div>
        <p>Тэги: {tag}</p>
        <div className="d-flex justify-content-around">
     <button 
     onClick={() => {navigate(`/posts/${id}`)}}
     type="button" 
     className="btn btn-outline-info rding">
         Читать в отдельном окне
         </button>
        
     <button 
     onClick={deleteHandler}
     type="button" 
     className="btn btn-outline-danger dlting">
         Удалить
         </button>
         </div>
     </div>
     
     
         </>
)
}
export default Postitem