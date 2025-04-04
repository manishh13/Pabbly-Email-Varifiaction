import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import BigCard from 'src/sections/dashboard/components/big-card/big-card';
import { APIKeyGenerate } from 'src/sections/api/components/api-card/api-card';
import { CurrentSummaryView } from 'src/sections/current-summary/component/current-summary-tab';

import { listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = '../public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';
const { items, style } = listItemes;

// ----------------------------------------------------------------------

const metadata = { title: `Page five | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <CurrentSummaryView />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',

          gap: 3,
        }}
      >
        <BigCard
          Items={items}
          style={style}
          buttontitle="Varify Email"
          visibility="block"
          img={imgPath}
        />

        <APIKeyGenerate />
      </Box>
    </DashboardContent>
  );
}
