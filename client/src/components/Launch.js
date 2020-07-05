import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../spacex.jpg'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success,
            rocket{
                rocket_id
                rocket_name
                rocket_type 
            }
        }
    }
`;

export class Launch extends Component {
    render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
    <Cards>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
             {({ loading, error, data }) => {
                    if (loading) return <Loader type="TailSpin" margin="auto" color="#00BFFF" height={80} width={80} />
                    if (error) return <h2>Something went wrong!</h2>
                            console.log(data)
                    const {
                        flight_number,
                        launch_success,
                        launch_year,
                        mission_name,
                        rocket: { rocket_id, rocket_type, rocket_name }
                    } = data.launch;

                    return (
                        <div>
                        <h1>Mission: {mission_name}</h1>
                        <h3>Launch Details</h3>
                        <Card>
                            <p>Flight number: {flight_number}</p>
                            <p>Launch Year: {launch_year}</p>
                           <p>Launch Successful: {launch_success ? 'Yes' : 'No'}</p>
                        </Card>
                        <h3>Rocket Details</h3>
                        <Card>
                            <p>Rocket Name: {rocket_name}</p>
                            <p>Rocket Type: {rocket_type}</p>
                            <p>Rocket ID: {rocket_id}</p>
                        </Card>
                        <Link to="/">
                            <Button>Back</Button>
                        </Link>
                        </div>
                    )
            }}
        </Query>
    </Cards>
        
    )
}
}
export default Launch;

const Cards = styled.div`
    color: white;
    margin-left: 10%;
`

const Card = styled.div`
    width: 400px;
    background: #171717;
    color: white;
    padding: 5px;
    font-size: 20px;
`

const Button = styled.button`
    background: #393e46;
    color: #FAFAFA;
    border-radius: 5%;
    padding: 10px;
    pointer: cursor;
    border: none;
    margin-top: 10px;
`





/*  Rocket ID: {rocket_id}
                            Rocket Name: {rocket_name}
                            Rocket Type: {rocket_type}
                              <p>Flight Number: {flight_number}</p>
                <p>Launch Year:{launch_date_local}</p>
                Launch Successful: <p style={{content: 'Yes'}}> {item.launch_success}</p>
                            */