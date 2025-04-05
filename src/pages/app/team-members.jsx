import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';
import { StatsCards } from 'src/components/stats-cards/stats-cards';

import BigCard from 'src/sections/dashboard/components/big-card/big-card';
import { CurrentSummaryView } from 'src/sections/current-summary/component/current-summary-tab';
import { TeamMemberTable } from 'src/sections/team-members/component/team-member-table/team-member-table';
import { FolderShareTable } from 'src/sections/team-members/component/folder-shared-table/folder-shared-table';

import { team_members_listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = '../../public/assets/images/big-card-thumbnail/pev_team_member.png';
const { items, style } = team_members_listItemes;
// ----------------------------------------------------------------------

const metadata = { title: `Page four | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl" sx={{ display: 'flex', gap: 3 }}>
      <PageHeader
        title="Team Members"
        descriptions="Add team members and share folder(s) access with them from here. "
        buttontitle="Varify Email"
        visibility="none"
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
      <BigCard
        Items={items}
        style={style}
        buttontitle="Add Team Member"
        visibility="none"
        img={imgPath}
        buttonVisibility="block"
        bigcardtitle="Points To Remember"
      />
      <TeamMemberTable />
      <FolderShareTable />
    </DashboardContent>
  );
}
