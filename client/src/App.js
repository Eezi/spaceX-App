import React from 'react';
import './App.css';
import logo from './spacex.jpg';
import Launches from './components/launches';
import Launch from './components/Launch'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

const client = new ApolloClient({
  uri: '/graphql',

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
       <Route path="/launch/:flight_number" component={Launch} />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
