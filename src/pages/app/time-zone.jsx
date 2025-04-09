import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { TimeZoneSummaryView } from 'src/sections/time-zone/components/time-zone-summary-tab/time-zone-summary-tab';

import { listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = '../public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';
const { items, style } = listItemes;
// ----------------------------------------------------------------------

const metadata = { title: `Page five | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl" sx={{ display: 'flex', gap: 3 }}>
      {/* <CurrentSummaryView /> */}
      <TimeZoneSummaryView />
    </DashboardContent>
  );
}
