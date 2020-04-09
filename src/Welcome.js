import React from 'react'

export default function Welcome (props) {
  const url = window.location.href
  const param = window.location.pathname

  return (
    <div>
      <h1>Welcome</h1>

      {param}
    </div>
  )
}