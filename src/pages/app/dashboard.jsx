import { CONFIG } from 'src/config-global';

import { DashboardContent } from 'src/layouts/dashboard';

import PageHeader from 'src/components/page-header/page-header';
const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="Dashboard"
        descriptions="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttontitle="Varify Email"
      />
    </DashboardContent>
  );
}
