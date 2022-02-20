import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import EditInsurance from './screens/EditInsuranceScreen'
import ChartScreen from './screens/ChartScreen'
const App = () => {
  
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route  path="/edit-isnurance/:id">
           <EditInsurance />
          </Route>
          <Route  path="/chart-screen">
           <ChartScreen />
          </Route>
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
