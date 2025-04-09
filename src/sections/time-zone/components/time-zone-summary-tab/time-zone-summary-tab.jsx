import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useTabs } from 'src/hooks/use-tabs';

import { Iconify } from 'src/components/iconify';
import PageHeader from 'src/components/page-header/page-header';

import { TimeZoneCard } from '../time-zone-card/time-zone-card';

// ----------------------------------------------------------------------

export const TABS = [
  {
    value: 'general',
    label: 'Credits Summary',
    icon: <Iconify icon="clarity:rack-server-solid" width="24px" />,
  },
  { value: 'billing', label: 'API', icon: <Iconify icon="fa6-solid:gears" width="24px" /> },
  {
    value: 'notifications',
    label: 'Team Members',
    icon: <Iconify icon="fluent:people-team-28-filled" width="24px" />,
  },
  {
    value: 'social',
    label: 'Activity Log',
    icon: <Iconify icon="mdi:briefcase-clock" width="24px" />,
  },
  {
    value: 'security',
    label: 'Time Zone',
    icon: <Iconify icon="fluent:globe-clock-24-regular" width="24px" />,
  },
];

// ----------------------------------------------------------------------

export function TimeZoneSummaryView() {
  const tabs = useTabs('security');

  return (
    <>
      <PageHeader
        title="Time Zone"
        descriptions="Manage your account time zone settings. "
        buttontitle="Varify Email"
        visibility="none"
      />
      <Tabs value={tabs.value} onChange={tabs.onChange}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>
      {tabs.value === 'security' && <TimeZoneCard />}
    </>
  );
}
