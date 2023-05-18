import React, { useEffect, useState } from 'react'
import RoundedButton from '../../shared/RoundedButton/RoundedButton'
import ThoughtCard from './ThoughtCard'
import './home.css'
import { commonGet } from '../../shared/utils';

export default function Home() {
    const [thoughts, setThoghts] = useState([]);

    const [tags, setTags] = useState(["JavaScript", "Azure", "Node.js"])


    useEffect(() => {
        commonGet('/thoughts')
            .then(x =>
                setThoghts(x))
    }, [])

    return (
        <div>
            <div className='sidebar'>
                {tags.map(x => <RoundedButton>{x}</RoundedButton>)}
            </div>
            <div className='main-content'>
                {
                    thoughts.map(x => <ThoughtCard thought={x}></ThoughtCard>)
                }

            </div>

        </div>
    )
}
