import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function LaunchItem({ 
    launch: { 
        flight_number, 
        mission_name, 
        launch_date_local, 
        launch_success,
        
    } }) {
   
    return (
        <Card> 
           <h1 style={{ display: 'inline-block' }}> Mission: </h1> <h1 style={{ display: 'inline-block', color: launch_success ? '#A6CB12' : '#E00543'}}> {mission_name}</h1>
           <p>
            Date: {launch_date_local}
          </p>
            <Link to={`/launch/${flight_number}`} >
            <Button>Launch Details</Button>
            </Link>
        </Card>
    )

}


const Card = styled.div`
    width: 800px;
    margin: 20px 0;
    
    padding: 20px;
    background: #171717;
    border-radius: 2px%;
`

const Button = styled.button`
    background: #393e46;
    color: #FAFAFA;
    border-radius: 5%;
    padding: 10px;
    pointer: cursor;
    border: none;
`
