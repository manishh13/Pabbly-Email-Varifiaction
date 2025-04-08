import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useTabs } from 'src/hooks/use-tabs';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'general',
    label: 'Credits Summary',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  { value: 'billing', label: 'API', icon: <Iconify icon="et:gears" width={24} /> },
  {
    value: 'notifications',
    label: 'Team Members',
    icon: <Iconify icon="fluent:people-team-28-filled" width={24} />,
  },
  {
    value: 'social',
    label: 'Activity Log',
    icon: <Iconify icon="mdi:briefcase-clock" width={24} />,
  },
  { value: 'security', label: 'Time Zone', icon: <Iconify icon="ic:round-vpn-key" width={24} /> },
];

// ----------------------------------------------------------------------

export function CurrentSummaryView() {
  const tabs = useTabs('general');

  return (
    <Tabs value={tabs.value} onChange={tabs.onChange}>
      {TABS.map((tab) => (
        <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
      ))}
    </Tabs>
  );
}
