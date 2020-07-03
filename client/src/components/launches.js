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
           
                <h1>Launches</h1>
                <Green>Success</Green>
                <Red>Fail</Red>
            
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Loader type="TailSpin" margin="auto" color="#00BFFF" height={80} width={80} />
            if (error) return <h2>Something went wrong!</h2>
        
            return (
              <Fragment>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
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
  text-align: center;
`
const Green = styled.div`
    background: #A6CB12;
    width: 70px;
    margin: 10px 0;
    height: 30px;
    text-align: center;
    vertical-align: middle;
`

const Red = styled.div`
    background: #E00543;
    width: 70px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
`
