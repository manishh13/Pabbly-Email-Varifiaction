import { Helmet } from 'react-helmet-async';

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

const imgPath = './public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';
const metadata = { title: `Dashboard | Pabbly Email Varification - ${CONFIG.site.name}` };
const { items, style } = listItemes;
export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DashboardContent maxWidth="xl">
        <PageHeader
          title="Dashboard"
          descriptions="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
          buttontitle="Verify Email"
          tooltipTitle="Click to veriry single or bulk email addresses"
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
            <Card sx={{ width: '336.25px', p: 3 }}>
              <DashboardFolders />
            </Card>
          </Box>
          <Box sx={{ width: '75%', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <BigCard
              Items={items}
              style={style}
              buttontitle="Verify Email"
              visibility="block"
              img={imgPath}
              bigcardtitle="Verification Guidelines"
              tooltipTitle="Click to veriry single or bulk email addresses"
            />

            <Box>
              <OrderListView />
            </Box>
          </Box>
        </Box>
      </DashboardContent>
    </>
  );
}
