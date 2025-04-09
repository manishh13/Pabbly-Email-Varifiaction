import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';

import { APIKeyGenerate } from 'src/sections/api/components/api-card/api-key-generate';
import { api_listItemes } from 'src/sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = '../public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';
const { items, style } = api_listItemes;

// ----------------------------------------------------------------------

const metadata = { title: `Page five | Dashboard - ${CONFIG.site.name}` };

export default function APIComponent() {
  return (
    // <DashboardContent>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',

        gap: 3,
      }}
    >
      {/* <BigCard
        Items={items}
        style={style}
        buttontitle="Verify Email"
        visibility="none"
        img={imgPath}
        buttonVisibility="none"
        bigcardtitle="Points To Remember"
        secondaryTextVisibility="none"
      /> */}

      <APIKeyGenerate />
    </Box>
    // </DashboardContent>
  );
}
