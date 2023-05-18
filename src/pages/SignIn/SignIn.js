import React from 'react'
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton'
import { TextField } from '@mui/material'

export default function SignIn() {
    return (
        <div>
            <div className='sidebar'>
                New Post
            </div>
            <div className='main-content'>
                    <TextField  placeholder='Email' label={'Email'} />
                    <br/>
                    <br/>
                    <TextField type='password' label={'Password'} placeholder='Password'/>
                    <br/>
                    <br/>
                    <PrimaryButton>GO</PrimaryButton>

            </div>
        </div>
    )
}
