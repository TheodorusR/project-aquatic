import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import {Link} from 'react-router-dom';
import shark from '../../img/shark.png';

const PageNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className='shadow-sm' fixed='top' color='light' light expand='md'>
      <NavbarBrand><img className='mr-2' height='30px' src={shark} alt='project aquatic logo' />Project Aquatic</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem className='mr-3'>
            <Link to='/'>Home</Link>
          </NavItem>
          <NavItem className='mr-3'>
            <Link to='/transactions'>Transactions</Link>
          </NavItem>
          <NavItem>
            <Link to='/statistic'>Statistic</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default PageNavbar
