import React from 'react';
import { Box } from 'components/services/Box';
import { Link } from 'react-router-dom';
import { NavItem } from './AppBar.styled';
import { ImHome } from 'react-icons/im';
import { BiMoviePlay } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';

const navItems = [
  { href: '/', text: 'Home', icon: ImHome },
  { href: 'movies', text: 'Movies', icon: BiMoviePlay },
];

export default function AppBar() {
  return (
    <Box as="header" display='flex' alignItems='center' flexDirection='column' p={4} pt={5} height="100vh">
      <Link to={'/'}><FaReact size={40} /></Link>
      <Box
        as="nav"
        display="flex"
        flexDirection="column"
        height={600}
        mt={5}
        borderRadius={10}
        bg="secondary"
        p={4}
        width={180}
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
