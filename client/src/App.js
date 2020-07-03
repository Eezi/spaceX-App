import React from 'react';
import './App.css';
import logo from './spacex.jpg';
import Launches from './components/launches';
import Details from './components/Details'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',

})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App">
        <img
        src={logo}
        alt="SpaceX"
        style={{width: 350, margin: 'auto', display: 'block'}}
        />
       <Route exact path="/" component={Launches}/>
       <Route path="/details/:flight_number" component={Details} />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
