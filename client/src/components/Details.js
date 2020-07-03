import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import logo from '../spacex.jpg'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

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
`

export class Details extends Component {
    render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
    <Fragment>
        <img src={logo} alt="spaceX" style={{width: 350, margin: 'auto', display: 'block'}}/>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
             {({ loading, error, data }) => {
                    if (loading) return <Loader type="TailSpin" margin="auto" color="#00BFFF" height={80} width={80} />
                    if (error) return <h2>Something went wrong!</h2>
                            console.log(data)
                    return <h1>Test</h1>
            }}
        </Query>
    </Fragment>
        
    )
}
}
export default Details;

const Cards = styled.div`
    color: white;
    margin-left: 150px;
`

const Card = styled.div`
    width: 300px;
    background: #171717;
    color: white;
`
/*  Rocket ID: {rocket_id}
                            Rocket Name: {rocket_name}
                            Rocket Type: {rocket_type}
                              <p>Flight Number: {flight_number}</p>
                <p>Launch Year:{launch_date_local}</p>
                Launch Successful: <p style={{content: 'Yes'}}> {item.launch_success}</p>
                            */