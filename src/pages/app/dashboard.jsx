import Box from '@mui/material/Box';
import { Card } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-cards';

import BigCard from 'src/sections/dashboard/components/big-card/big-card';
import DashboardFolders from 'src/sections/dashboard/components/dashboard-folder/custom-styling';
import { OrderListView } from 'src/sections/dashboard/components/dashboard-table/order-list-view';

import { listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };
const { items, style } = listItemes;
export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="Dashboard"
        descriptions="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttontitle="Varify Email"
      />
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
        />

        <StatsCards
          title="Email Credits Remaining"
          total={9968}
          color="primary"
          icon_name="Complete.svg"
          icon_color="#1d88fa"
        />

        <StatsCards
          title="Total Number of Email Lists"
          total={100}
          color="success"
          icon_name="list.svg"
          icon_color="#28a645"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 3,
          mt: 3,
        }}
      >
        <Box sx={{ width: '25%' }}>
          <Card sx={{ width: '100%', pt: 3, pl: 3 }}>
            <DashboardFolders />
          </Card>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <BigCard Items={items} style={style} buttontitle="Varify Email" />
          </Box>
          <Box>
            <OrderListView />
          </Box>
        </Box>
      </Box>
    </DashboardContent>
  );
}
