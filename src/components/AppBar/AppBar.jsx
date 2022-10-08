import React from 'react';
import { Box } from 'components/services/Box';
import { Link } from 'react-router-dom';
import { NavItem } from './AppBar.styled';
import { ImHome } from 'react-icons/im';
import { BiMoviePlay } from 'react-icons/bi';

const navItems = [
  { href: '/', text: 'Home', icon: ImHome },
  { href: 'movies', text: 'Movies', icon: BiMoviePlay },
];

export default function AppBar() {
  return (
    <Box as="header" p={4} height="100vh">
      <Link to={'/'}>Logo</Link>
      <Box
        as="nav"
        display="flex"
        flexDirection="column"
        height={300}
        mt={5}
        borderRadius={10}
        bg="secondary"
        p={4}
      >
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href} end>
            <Icon size='18'/>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
}
