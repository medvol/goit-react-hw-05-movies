import React from 'react';
import { Box } from 'components/services/Box';


export default function Movies() {
  return (
    <Box as='main' display='flex' flexDirection='column'>
      <Box as="header">
        <label>
          <input type='text' placeholder='search Movie'/>
        </label>
      </Box>
      <Box as='ul'></Box>
    </Box>
  )
}
