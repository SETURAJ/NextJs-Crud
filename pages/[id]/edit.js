import React from 'react'
import Link from 'next/link'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { useState } from 'react'
const axios = require('axios').default;
import Router, {useRouter} from 'next/router'

function EditHero({heros}) {
    const router=useRouter()
    const heroId=router.query.id
    const [form, setForm] = useState({
        superHero:heros.superHero,
        realName:heros.realName
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
            const res=await axios(`http://localhost:3000/api/hero/${heroId}`,{
                method: "PUT",
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
                value={form.superHero}
            />
            <MDBInput
                className='my-2'
                onChange={handleChange}
                label='realName'
                type="text"
                name='realName'
                value={form.realName}
            />
            <MDBBtn type="submit">Edit hero</MDBBtn>
        </form>
    </div>
  )
}

export async function getServerSideProps({params}) {
    // Fetch data from external API
    const id=params.id;
    const res = await axios(`http://localhost:3000/api/hero/${id}`)
    
    //console.log(res.data.hero)
    const {hero} = res.data
    // Pass data to the page via props
   // console.log(hero)
    return { props: {heros: hero} }
}

export default EditHero