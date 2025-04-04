import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';

import LearnMoreTypography from 'src/components/learn-more/learn-more';

import BigCard from '../dashboard/components/big-card/big-card';
import { help_n_tutorian_listItemes } from '../dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const { items, style } = help_n_tutorian_listItemes;
const imgPath = '../public/assets/images/get-help-thumbnail/get-help-photo.png';
// ----------------------------------------------------------------------

export function BlankView({ title = 'Blank', subTitle }) {
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
      <Card
        sx={{
          width: '20%',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
          p: 1,
          gap: 2,
        }}
      >
        <Box
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
          />
          {/* <PlayCircleOutline sx={{ position: 'absolute', fontSize: 50, color: 'white' }} /> */}
        </Box>
        <Typography varient="span">Getting Started with Pabbly Email Verification</Typography>
      </Card>
    </DashboardContent>
  );
}
