import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';

import BigCard from 'src/sections/dashboard/components/big-card/big-card';
import { CurrentSummaryView } from 'src/sections/current-summary/component/current-summary-tab';
import { ActivityLogTable } from 'src/sections/activity-log/component/activity-log-table/activity-log-table';

import { activity_log_listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = '../../public/assets/images/big-card-thumbnail/activity-log.png';
const { items, style } = activity_log_listItemes;
// ----------------------------------------------------------------------

const metadata = { title: `Page five | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl" sx={{ display: 'flex', gap: 3 }}>
      <PageHeader
        title="Activity Log"
        descriptions="Keep track of all actions in your Pabbly Email Verification account, like verifying single emails, uploading and verifying email lists, downloading reports, deleting email lists, adding team members, and regenerating API keys. Activity Log helps you monitor changes and ensure everything runs smoothly.  "
        buttontitle="Varify Email"
        visibility="none"
      />
      <CurrentSummaryView />
      <BigCard
        Items={items}
        style={style}
        buttontitle="Add Team Member"
        visibility="none"
        img={imgPath}
        buttonVisibility="none"
        bigcardtitle="Points To Remember"
      />
      <ActivityLogTable />
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
