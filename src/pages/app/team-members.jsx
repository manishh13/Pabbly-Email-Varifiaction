import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { TeamMemberSummaryView } from 'src/sections/team-member/components/team-member-summary-view/team-member-summary-view';

import { team_members_listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = '../../public/assets/images/big-card-thumbnail/pev_team_member.png';
const { items, style } = team_members_listItemes;
// ----------------------------------------------------------------------

const metadata = { title: `Page four | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl" sx={{ display: 'flex', gap: 3 }}>
      <TeamMemberSummaryView />
    </DashboardContent>
  );
}
