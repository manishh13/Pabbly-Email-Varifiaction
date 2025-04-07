import React from 'react';

import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Iconify } from '../iconify';
import { usePopover } from '../custom-popover';
import LearnMoreTypography from '../learn-more/learn-more';

// ----------------------------------------------------------------------
const data = [
  { value: 'verify-single-email', label: 'Verify Single Email' },
  { value: 'verify-bulk-email', label: 'Verify Bulk Email' },
];
export default function PageHeader({
  title,
  descriptions,
  showButton = true,
  buttontitle,
  visibility,
  tooltipTitle,
}) {
  const popover = usePopover();
  const [buttonPopover, setPopover] = React.useState(false);
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
            <Typography sx={{ color: 'text.secondary', wordWrap: 'wrap' }}>
              {descriptions} <LearnMoreTypography />
            </Typography>
          </Box>
        </Box>
      </Box>

      {showButton && (
        <Box>
          <Tooltip title={tooltipTitle} arrow placement="top">
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ display: `${visibility}` }}
              startIcon={
                <Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />
              }
              endIcon={
                <Iconify
                  icon="material-symbols:keyboard-arrow-down-rounded"
                  style={{ width: 24, height: 24 }}
                />
              }
              onClick={() => {
                setPopover(!buttonPopover);
              }}
            >
              {buttontitle}
            </Button>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
}
