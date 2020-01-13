import {useRouter} from 'next/router'
import posts from '../../posts.json'

const Blog = (props) => {
  console.log('xxx props: ', props)

  const post = props.post


  return (
    <>
      <h1> {post.title} </h1>
      <p>Post id: {post.content} </p>
    </>
  )
}

Blog.getInitialProps = ({ query }) => {
  console.log('in getInitialProps', query)
  return {
    post: posts[query.id]
  }
}

export default Blog
