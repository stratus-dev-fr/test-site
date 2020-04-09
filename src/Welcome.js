import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome () {
  return (
    <div>
      <h1>Welcome</h1>

      <Link to='/Article/1234'>Go to article</Link>
    </div>
  )
}