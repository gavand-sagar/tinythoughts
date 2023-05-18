import { TextField } from '@mui/material'
import React from 'react'
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton'

export default function Signup() {
    return (
        <div>
            <div className='sidebar'>
                Signup
            </div>
            <div className='main-content'>
                <TextField placeholder='Name' label={'Name'}  />
                <br />
                <br />
                <TextField placeholder='Email' label={'Email'}  />
                <br />
                <br />
                <TextField type='password' label={'Password'}  placeholder='Password' />
                <br />
                <br />
                <TextField type='password' label={'Retype Password'}  placeholder='Retype Password' />
                <br />
                <br />
                <PrimaryButton>Add</PrimaryButton>
            </div>

        </div>
    )
}
