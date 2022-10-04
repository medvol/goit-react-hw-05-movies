import React from 'react';
import { Box } from 'components/services/Box';
import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';



export default function Layout() {
  return (
      <Box display='grid' gridTemplateColumns='200px 1fr'>
          <AppBar />
          <Outlet/>
      </Box>
  )
}
