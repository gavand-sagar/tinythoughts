import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton'
import { commonPost } from '../../shared/utils'

export default function NewPost() {
    const [tags, setTags] = useState(["JavaScript", "Azure", "Node.js"])

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tag, setTag] = useState('')

    function save() {
        let obj = {
            title,
            content,
            tag,
            time: new Date().toDateString()
        }
        commonPost('/thoughts', obj).then(x => {
            alert('Added')
        })
    }
    return (
        <div>
            <div className='sidebar'>
                New Post
            </div>
            <div className='main-content'>
                <TextField placeholder='Title' label={'Title'} value={title} onChange={e => setTitle(e.target.value)} />
                <br />
                <br />
                <TextField placeholder='Type your Thoughts' value={content} onChange={e => setContent(e.target.value)} label={'Type your Thoughts'} multiline={true} minRows={5} />
                <br />
                <br />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                        value={tag} onChange={e => setTag(e.target.value)}
                    >
                        {tags.map(x => <MenuItem value={x}>{x}</MenuItem>)}
                    </Select>
                </FormControl>
                <br />
                <br />

                <PrimaryButton onClick={save}>Done</PrimaryButton>
            </div>
        </div>
    )
}
