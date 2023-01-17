import React from 'react'
import ContentLoader from 'react-content-loader'

export default function Preloader(props) {
    return (
        <ContentLoader
            speed={2}
            width={508}
            height={130}
            display="block"
            viewBox="0 0 508 130"
            backgroundColor="#99c2a2"
            foregroundColor="#ffffff"
            {...props}
        >
            <circle cx="67" cy="42" r="40" />
            <rect x="23" y="87" rx="9" ry="9" width="90" height="25" />
            <rect x="121" y="18" rx="19" ry="19" width="388" height="82" />
        </ContentLoader>
    )
}