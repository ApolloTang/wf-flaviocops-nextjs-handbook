import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href='/blog/test'>
      <a>Blog/test</a>
    </Link>
  </div>
)

export default Index
