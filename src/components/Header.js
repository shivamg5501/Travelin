import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import SearchBox from './SearchBox';
import "./Header.css"

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar className='diva'>
      <Container>
        <div className='title' onClick={() => navigate('/')}>Travelin</div>
        {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <SearchBox className="search" navigate={navigate} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
