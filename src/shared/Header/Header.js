import './header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton/PrimaryButton'


export default function Header() {
    return (
        <>
            <div className='header'>
                <div className='app-name'>
                    Tiny Thought
                </div>
                <div>
                    <Link to={'/home'}> <PrimaryButton>HOME</PrimaryButton> </Link>
                    <Link to={'/new-post'}><PrimaryButton>NEW POST</PrimaryButton> </Link>
                </div>
                <div>
                    <Link to={'/sign-in'}><PrimaryButton>SIGN IN </PrimaryButton></Link>
                    <Link to={'/sign-up'}><PrimaryButton>SIGN UP</PrimaryButton> </Link>
                </div>
            </div>
        </>
    )
}
