
import React from 'react';
import { Box } from 'components/services/Box';
import { NavLink } from 'react-router-dom';

const navItems = [
    { href: 'home', text: 'Home', icon: '' },
    {href:'movies', text:'Movies', icon:''},
]

export default function AppBar() {
  return (
      <Box as='header' p={3} height='100vh' borderRight='1px solid black'>
          <Box as='nav' display='flex' flexDirection='column'>
              {navItems.map(({ href, text, icon: Icon }) => (
                  <NavLink to={href} key={href}>
                      {/* <Icon size='16'/> */}
                      {text}
                  </NavLink>))}
              
          </Box>
      </Box>
  )
}
