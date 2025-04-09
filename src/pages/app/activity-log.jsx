import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { ActivitySummaryTab } from 'src/sections/activity-log/component/activiy-log-summary-tab/current-summary-tab';

import { activity_log_listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = '/assets/images/big-card-thumbnail/activity-log.png';
const { items, style } = activity_log_listItemes;
// ----------------------------------------------------------------------

const metadata = { title: `Page five | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl" sx={{ display: 'flex', gap: 3 }}>
      <ActivitySummaryTab />
    </DashboardContent>
  );
}
