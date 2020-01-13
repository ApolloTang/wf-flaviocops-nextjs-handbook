import {useRouter} from 'next/router'
import posts from '../../posts.json'

const Blog = () => {
  const router = useRouter()

  console.log('xxx query: ', router.query) // Initially component is render w/o the dynamic router.query = {}
  const id = router.query.id
  const post = posts[id]

  if (!id) {
    return (
      <>
        <p>no date</p>
      </>
    )
  }

  // after initial render, nextjs triggers an update with query value
  return (
    <>
      <h1> {post.title} </h1>
      <p>Post id: {post.content} </p>
    </>
  )
}

export default Blog
