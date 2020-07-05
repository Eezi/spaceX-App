import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const LAUNCHES_QUERY = gql`
    query LaunchsQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }

    }
`

export class Launches extends Component {
   render() {
    return (
        <Container>
           
               
            
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
            if (error) return <h2 style={{ margin: 'auto'}}>Something went wrong!</h2>
        
            return (
              <Stats>
                 <h1>Launches</h1>
                <Green></Green> <p style={{ display: 'inline-block' }}>  = Success</p>
                <Red></Red> <p style={{  }}>  = Fail</p>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Stats>
            );
          }}
        </Query>
        </Container>
        )
    }
}

export default Launches

const Container = styled.div`
  color: #FAFAFA;
  width: 100%;
  
`
const Green = styled.div`
    background: #A6CB12;
    width: 70px;
    margin: 10px 0;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    color: black;
    display: inline-block;
`

const Red = styled.div`
    background: #E00543;
    width: 70px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    margin-bottom: 20px;
    color: black;
    
    
`
const Stats = styled.div`
    margin-left: 250px;
`
