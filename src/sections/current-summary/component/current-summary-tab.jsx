import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useTabs } from 'src/hooks/use-tabs';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

// import { AccountGeneral } from '../account-general';
// import { AccountBilling } from '../account-billing';
// import { AccountSocialLinks } from '../account-social-links';
// import { AccountNotifications } from '../account-notifications';
// import { AccountChangePassword } from '../account-change-password';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'general',
    label: 'Credits Summary',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  { value: 'billing', label: 'API', icon: <Iconify icon="solar:bill-list-bold" width={24} /> },
  {
    value: 'notifications',
    label: 'Team Members',
    icon: <Iconify icon="solar:bell-bing-bold" width={24} />,
  },
  { value: 'social', label: 'Activity Log', icon: <Iconify icon="solar:share-bold" width={24} /> },
  { value: 'security', label: 'Time Zone', icon: <Iconify icon="ic:round-vpn-key" width={24} /> },
];

// ----------------------------------------------------------------------

export function CurrentSummaryView() {
  const tabs = useTabs('general');

  return (
    <DashboardContent>
      <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 3, md: 5 } }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {/* {tabs.value === 'general' && <AccountGeneral />} */}

      {/* {tabs.value === 'billing' && (
        <AccountBilling
          plans={_userPlans}
          cards={_userPayment}
          invoices={_userInvoices}
          addressBook={_userAddressBook}
        />
      )} */}

      {/* {tabs.value === 'notifications' && <AccountNotifications />} */}

      {/* {tabs.value === 'social' && <AccountSocialLinks socialLinks={_userAbout.socialLinks} />} */}

      {/* {tabs.value === 'security' && <AccountChangePassword />} */}
    </DashboardContent>
  );
}
