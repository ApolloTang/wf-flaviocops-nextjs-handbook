import {useRouter} from 'next/router'
import posts from '../../posts.json'

const Blog = () => {
  const router = useRouter()
  const post = posts[router.query.id]
  console.log('post:', post)

  return (
    <>
      <h1> {post.title} </h1>
      <p>Post id: {post.content} </p>
    </>
  )
}

export default Blog
