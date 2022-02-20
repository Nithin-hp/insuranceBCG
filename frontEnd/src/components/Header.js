import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav} from 'react-bootstrap'
import SearchBox from './SearchBox'


const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BCG</Navbar.Brand>
          </LinkContainer>
          <Nav className='ml-auto'>
            <LinkContainer to='/chart-screen'>
              <Nav.Link>
                <i class="fas fa-book"></i> Chart screen
              </Nav.Link>
            </LinkContainer>
           </Nav> 
          <Route render={({ history }) => <SearchBox history={history} />} />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
