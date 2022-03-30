import { useContext, useEffect, useState } from 'react'
import { PostListContext } from '../../contexts/PostListContext'
import './styles.css'
const SearchPost = () => {


const { postos} = useContext(PostListContext)

useEffect(() => {
postos()
}, [])
const [search, setSearch] = useState('')
const filteredPosts = postos.filter(post => {
    return post.tag.includes(search)
})
    return (
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
    )
}
export default SearchPost