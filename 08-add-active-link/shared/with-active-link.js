import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, as, children }) => {
  const router = useRouter()
  let className = children.props.className || ''
  console.log('xxxx: className:', className)
  console.log('router.pathname:' , router.pathname)
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return (
    <Link
      href={href}
      as={as} >
      {React.cloneElement(children, { className })}
    </Link>
  )
}
