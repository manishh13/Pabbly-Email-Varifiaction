import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MenuItem, MenuList } from '@mui/material';

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

          {buttonPopover && (
            <CustomPopover
              open={popover.open}
              anchorEl={popover.anchorEl}
              onClose={popover.onClose}
              slotProps={{ arrow: { placement: 'top-right' } }}
            >
              <MenuList>
                {data.map((option) => (
                  <MenuItem
                    key={option.value}
                    selected={option.value === 'verify-single-email'}
                    onClick={() => {
                      popover.onClose();
                      // onChangePublish(option.value);
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </MenuList>
            </CustomPopover>
          )}
        </Box>
      )}
    </Box>
  );
}
