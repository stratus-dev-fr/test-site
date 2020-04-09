import React, { useEffect, useState } from 'react'

export default function Article (props) {
    const [article, setArticle] = useState(null)

    useEffect(() => {
        setArticle(props.match.params.article)
    })

    return (
        <div>
            <h1>Article page</h1>

            {article}
        </div>
    )
}