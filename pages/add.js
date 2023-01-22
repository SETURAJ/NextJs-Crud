import React from 'react'
import Link from 'next/link'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useState } from 'react'
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'

function addNewHero() {
    const [form, setForm] = useState({
        superHero:'',
        realName:''
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleForm = async(e) => {
        e.preventDefault()
        try{
            const res=await axios('http://localhost:3000/api/hero',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(form)
            })
            Router.push('/')
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div className='container'>
        <h1 className="display-3"> Add a new Hero </h1>
        <form onSubmit={handleForm}>
            <MDBInput
                onChange={handleChange}
                label='SuperHero'
                type="text"
                name='superHero'
            />
            <MDBInput
                className='my-2'
                onChange={handleChange}
                label='realName'
                type="text"
                name='realName'
            />
            <MDBBtn type="submit">Add new hero</MDBBtn>
        </form>
    </div>
  )
}

export default addNewHero