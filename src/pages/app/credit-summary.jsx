import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';

import { listItemes } from '../../sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

const imgPath = './public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';

const { items, style } = listItemes;
// ----------------------------------------------------------------------

const metadata = { title: `Page four | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="Credits Summary"
        descriptions="View a summary of your email verification credits. "
        buttontitle="Varify Email"
      />
    </DashboardContent>
  );
}
