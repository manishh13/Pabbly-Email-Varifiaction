import { useState } from 'react';

import Box from '@mui/material/Box';
import { Card, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';

import LearnMoreTypography from 'src/components/learn-more/learn-more';

import BigCard from '../dashboard/components/big-card/big-card';
import { help_n_tutorian_listItemes } from '../dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const { items, style } = help_n_tutorian_listItemes;
const imgPath = '/assets/images/get-help-thumbnail/get-help-photo.png';
// ----------------------------------------------------------------------

export function BlankView({ title = 'Blank', subTitle }) {
  const [showButton, setShowButton] = useState(true);
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4"> {title} </Typography>
      <Typography variant="span" sx={{ fontSize: '16px  ' }}>
        {subTitle}
        <LearnMoreTypography />
      </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        }}
      >
        <BigCard
          Items={items}
          style={style}
          buttontitle="Ask Question"
          img={imgPath}
          visibility="none"
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on medium and up
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' }, // Align items to the start on small screens
          mt: 4,
        }}
      >
        <Box sx={{ flex: 1, mt: 1 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Tutorials
          </Typography>
        </Box>

        {showButton && (
          <Box sx={{ mt: { xs: 2, md: 0 } }}>
            {' '}
            {/* Add margin-top on small screens */}
            <Button variant="outlined" size="large" color="primary">
              View All Videos
            </Button>
          </Box>
        )}
      </Box>
      <Card
        sx={{
          width: '336.26px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
          p: 2,
          gap: 2,
          mt: 3,
        }}
      >
        {/* <Box
          sx={{
            width: '100%',
            borderRadius: 2,
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src="../public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg"
            alt="Email Verification Video"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          /> */}
        {/* <PlayCircleOutline sx={{ position: 'absolute', fontSize: 50, color: 'white' }} /> */}
        {/* </Box> */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: '100%' },
            height: { xs: '200px', md: 'auto' },
          }}
        >
          <img
            src="../public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg"
            alt="Email Verification Video"
            style={{ borderRadius: '16px', width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <img
            src="../../../../../public/assets/images/big-card-thumbnail/play-icon (1).svg"
            alt="Email Verification Video"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)', // Center the icon
              width: '50px',
              height: '50px',
            }}
          />
        </Box>

        <Typography varient="span" sx={{ fontSize: '14px', fontWeight: 700 }}>
          Getting Started with Pabbly Email Verification
        </Typography>
      </Card>
    </DashboardContent>
  );
}
