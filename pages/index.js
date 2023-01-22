import React from 'react'
import Link from 'next/link'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdb-react-ui-kit'
const axios = require('axios').default;

const index = ({heros}) => {
  return (
    <div className="container">
      <h1 className="display-2">Superhero Identity</h1>
      <div>
        {heros.map(hero =>{
          return (
            <MDBCard className='border border-2' style={({maxWidth:'22rem'})}>
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                  <MDBCardText>
                    View Original Name
                  </MDBCardText>
                  <Link href={`/${hero._id}`}><MDBBtn className='mx-2'>View Hero</MDBBtn></Link>
                  <Link href={`/${hero._id}/edit`}><MDBBtn>Edit Hero</MDBBtn></Link>
              </MDBCardBody>
            </MDBCard>
                )
           })}
        
      </div>
    </div>   
  )
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await axios('http://localhost:3000/api/hero')
  
  console.log(res.data.hero)
  const {hero} = res.data
  // Pass data to the page via props
  return { props: {heros: hero} }
}


export default index