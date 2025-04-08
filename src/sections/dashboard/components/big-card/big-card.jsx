import React from 'react';

// import { Add, PlayCircleOutline } from '@mui/icons-material';
import { Box, Card, Button, Tooltip, Typography, CardContent } from '@mui/material';

import { Iconify } from '../../../../components/iconify';

const BigCard = ({
  buttontitle,
  Items,
  styles,
  visibility,
  img,
  buttonVisibility,
  bigcardtitle,
  tooltipTitle,
}) => (
  <Card
    sx={{
      display: 'flex',
      p: 2,
      borderRadius: 2,
      boxShadow: 3,

      alignItems: 'center',
      height: 'auto',
    }}
  >
    {/* Left Section */}
    <CardContent sx={{ display: 'flex', flexDirection: 'column ', gap: 1, width: '60%' }}>
      <Typography variant="h6">{bigcardtitle}</Typography>
      <Typography variant="body2" color="text.secondary">
        Please adhere to the following guidelines when uploading your CSV file:
      </Typography>
      <ul style={{ margin: 0, paddingLeft: 20, width: '100%', listStyleType: 'disc' }}>
        {Items.map((item, index) => (
          <li key={index} style={{ fontSize: '14px', color: '#637381', fontWeight: 'medium' }}>
            {item}
          </li>
        ))}
      </ul>
      <Box sx={{ display: `${buttonVisibility}` }}>
        <Tooltip title={tooltipTitle} arrow placement="top">
          <Button
            variant="outlined"
            size="large"
            color="primary"
            startIcon={
              <Iconify icon="heroicons:plus-circle-16-solid" style={{ width: 18, height: 18 }} />
            }
            endIcon={
              <Iconify
                icon="material-symbols:keyboard-arrow-down-rounded"
                style={{ width: 24, height: 24, display: `${visibility}` }}
              />
            }
          >
            {buttontitle}
          </Button>
        </Tooltip>
      </Box>
    </CardContent>

    {/* Right Section */}
    <Tooltip title="Click to watch tutorial." arrow placement="top">
      <Box
        sx={{
          borderRadius: 2,
          // background: '#f5f5f5',
          widht: '35%',

          overflow: 'hidden',
        }}
      >
        <img
          src="../../../../../public/assets/images/big-card-thumbnail/play-icon (1).svg"
          alt="Email Verification Video"
          style={{ position: 'absolute' }}
        />
        <img src={img} alt="Email Verification Video" style={{ borderRadius: 2 }} />
        {/* <PlayCircleOutline sx={{ position: 'absolute', fontSize: 50, color: 'white' }} /> */}
      </Box>
    </Tooltip>
  </Card>
);

export default BigCard;
