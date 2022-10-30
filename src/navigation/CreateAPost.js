import { useEffect, useState } from "react"

const CreateAPost = () => {

const [articles, setArticles] = useState([])

const {userName,title,content} = articles

const [allPosts, setAllPosts] = useState([])

const changeHandler = (event) => {
  
  switch (event) {
    case 'userName':
      return setArticles({...articles,userName : event.target.value})
      
    case 'title':
      return setArticles({...articles,title:event.target.value})

    case 'content':
    return setArticles({...articles, content:event.target.value})
    
    default:
      return null
  }}
  console.log({articles});

const submitHandler = (event) => {
  setAllPosts([...allPosts,event.target.value])
  }
  console.log(allPosts, 'all POSTS')

  return (
    <div>
      <h1>Fill up to create a form</h1>
      <form  onSubmit={submitHandler}>
        <label></label>
        <input 
        placeholder="Username"
        type="text"
        required
        onChange={changeHandler}
        value={userName}
        name='userName'
         />
        <label></label>
        <input 
        placeholder="Title"
        type="text"
        required
        onChange={changeHandler}
        value={title}
        name='title'
         />
        <label></label>
        <input 
        placeholder="Content"
        type="text"
        required
        onChange={changeHandler}
        value={content}
        name='content'
         />
        <button
        type="submit">
          Create a Post
          </button>
      </form>
    </div>
  )
}

export default CreateAPost