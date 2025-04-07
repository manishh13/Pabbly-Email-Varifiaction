import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-cards';

import { CurrentSummaryView } from 'src/sections/current-summary/component/current-summary-tab';
import { CurrentSummaryTable2 } from 'src/sections/current-summary/component/current-summary-table/current-summary-table-2';

import { listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = './public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';
const { items, style } = listItemes;
// ----------------------------------------------------------------------

const metadata = { title: `Page four | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl" sx={{ display: 'flex', gap: 3 }}>
      <PageHeader
        title="Credits Summary"
        descriptions="View a summary of your email verification credits. "
        buttontitle="Verify Email"
      />
      <CurrentSummaryView />
      <Box
        sx={{
          mt: 5,
          gap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        <StatsCards
          title="Email Credits Consumed"
          total={32}
          color="primary"
          icon_name="Processed.svg"
          icon_color="#10cbf3"
          tooltipTitle="Number of emails credits consumed by your account."
        />

        <StatsCards
          title="Email Credits Remaining"
          total={9968}
          color="primary"
          icon_name="Complete.svg"
          icon_color="#1d88fa"
          tooltipTitle="Number of emails credits remaining in your account."
        />

        <StatsCards
          title="Total Number of Email Lists"
          total={100}
          color="success"
          icon_name="list.svg"
          icon_color="#28a645"
          tooltipTitle="Number of emails lists uploaded in your account."
        />
      </Box>
      {/* <OrderListView /> */}
      {/* <CurrentSummaryTable />
       */}
      <CurrentSummaryTable2 />
    </DashboardContent>
  );
}
