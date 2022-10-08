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
    <Box
      as="header"
      display="flex"
      alignItems="center"
      flexDirection="column"
      p={4}
      pt={1}
      height="100vh"
    >
      <Box
        as="nav"
        display="flex"
        flexDirection="column"
        gap={4}
        height={600}
        mt={5}
        borderRadius={10}
        bg="secondary"
        p={4}
        width={180}
      >
        <Box display="flex" justifyContent="center" mb={5}>
          <Link to={'/'}>
            <FaReact size={40} />
          </Link>
        </Box>

        <ul>
          {navItems.map(({ href, text, icon: Icon }) => (
            <li key={href}>
              <NavItem to={href} end>
                <Icon size="18" />
                {text}
              </NavItem>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
