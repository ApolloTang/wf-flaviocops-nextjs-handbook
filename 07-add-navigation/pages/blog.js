import posts from '../posts.json'
import Link from 'next/link'

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      {Object.entries(posts).map((value, index) => {
        const k = value[0]
        const v = value[1]
        return (
          <li key={index}>
            <Link
              href='/blog/[id]'
              as={`/blog/${k}`} >
              <a>{v.title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Blog
