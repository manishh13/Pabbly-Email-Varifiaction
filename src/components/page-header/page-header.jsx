import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from '../iconify';
import LearnMoreTypography from '../learn-more/learn-more';

export default function PageHeader({ title, descriptions, showButton = true, buttontitle }) {
  return (
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
          <Button
            variant="contained"
            size="large"
            color="primary"
            startIcon={
              <Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />
            }
            endIcon={
              <Iconify
                icon="material-symbols:keyboard-arrow-down-rounded"
                style={{ width: 24, height: 24 }}
              />
            }
          >
            {buttontitle}
          </Button>
        </Box>
      )}
    </Box>
  );
}
