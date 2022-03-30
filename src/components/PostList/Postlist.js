import { useContext, useState } from "react"
import { PostListContext } from "../../contexts/PostListContext"
import Postitem from "../Postitem/Postitem"

const PostList = () => {
 const {postos} = useContext(PostListContext)
 const [search, setSearch] = useState('')
 const filteredPosts = postos.filter(post => {
     return post.tag.includes(search)
 })
    return (<>
      <form className="search">
      <div >
      
      <input
       placeholder='поиск по тегам'
        type="text"
         className="form-control" 
         id="exampleInputPassword1" 
         onChange={(e) => setSearch(e.target.value) }
         value={search}
            />
         </div>
    </form>
      <ul class='list-group'>
  {filteredPosts.map((postos, i) => (
    <Postitem key={postos.id}
          index={i} id={postos.id} 
          title={postos.title}
          text={postos.text} 
          img={postos.img}
          tag={postos.tag} />     
  ))}
  </ul>
  </>
  )
}
export default PostList