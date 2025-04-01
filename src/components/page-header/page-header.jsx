import React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import LearnMoreTypography from '../learn-more/learn-more';
import Button from '@mui/material/Button';
export default function PageHeader({ title, descriptions, showButton = true, buttontitle }) {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box>
          <Box>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>{descriptions}</Typography>
            </Box>
            <Box>
              <LearnMoreTypography />
            </Box>
          </Box>
        </Box>

        {showButton && (
          <Box>
            <Button variant="contained">{buttontitle}</Button>
          </Box>
        )}
      </Box>
    </>
  );
}
