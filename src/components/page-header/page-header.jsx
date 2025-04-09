import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Tooltip, MenuItem, MenuList } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from '../iconify';
import LearnMoreTypography from '../learn-more/learn-more';
import { usePopover, CustomPopover } from '../custom-popover';

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
  onViewRow,
}) {
  const popover = usePopover();
  const confirm = useBoolean();

  const collapse = useBoolean();

  const [buttonPopover, setPopover] = React.useState(false);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on medium and up
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' }, // Align items to the start on small screens
          mt: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          {/* Allow this box to grow and take available space */}
          <Typography variant="h4" sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ color: 'text.secondary', wordWrap: 'wrap' }}>
              {descriptions} <LearnMoreTypography />
            </Typography>
          </Box>
        </Box>

        {showButton && (
          <Box sx={{ mt: { xs: 2, md: 0 } }}>
            {/* Add margin-top on small screens */}
            <Tooltip title={tooltipTitle} arrow placement="top">
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{ display: `${visibility}` }}
                startIcon={
                  <Iconify
                    icon="heroicons:plus-circle-16-solid"
                    style={{ width: '18px', height: '18px' }}
                  />
                }
                endIcon={
                  <Iconify icon="ri:arrow-down-s-line" style={{ width: '18px', height: '18px' }} />
                }
                onClick={popover.onOpen}
              >
                {buttontitle}
              </Button>
            </Tooltip>
          </Box>
        )}
      </Box>
      <CustomPopover
        sx={{ mt: 1, width: '180px', px: '4px', py: '8px' }}
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'bottom' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
          >
            Verify Single Email
          </MenuItem>

          <MenuItem
            onClick={() => {
              onViewRow();
              popover.onClose();
            }}
          >
            Verify Bulk Email
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
