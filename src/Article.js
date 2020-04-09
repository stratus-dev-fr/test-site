import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Article (props) {
    const [article, setArticle] = useState(null)

    useEffect(() => {
        setArticle(props.match.params.article)
    })

    return (
        <div>
            <h1>Article page</h1>

            {article}

            <Link to='/'>Return to home</Link>
        </div>
    )
}