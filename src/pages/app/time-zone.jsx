import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';

import { TimeZoneCard } from 'src/sections/time-zone/components/time-zone-card/time-zone-card';
import { CurrentSummaryView } from 'src/sections/current-summary/component/current-summary-tab';

import { listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = '../public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';
const { items, style } = listItemes;
// ----------------------------------------------------------------------

const metadata = { title: `Page five | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl" sx={{ display: 'flex', gap: 3 }}>
      <PageHeader
        title="Time Zone"
        descriptions="Manage your account time zone settings. "
        buttontitle="Varify Email"
        visibility="none"
      />
      <CurrentSummaryView />
      <TimeZoneCard />

      {/* <Box
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
      </Box> */}
    </DashboardContent>
  );
}
