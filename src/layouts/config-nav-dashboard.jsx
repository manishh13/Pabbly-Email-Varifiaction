import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  dashboard: icon('dashboard'),
  settings: icon('settings'),
  gethelp: icon('gethelp'),
};

// ----------------------------------------------------------------------

export const navData = [
  {
    subheader: 'Overview 6.0.0',
    items: [{ title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard }],
  },

  {
    items: [
      {
        title: 'Settings',
        path: paths.dashboard.settings.root,
        icon: ICONS.settings,
        children: [
          { title: 'Credit Summary', path: paths.dashboard.settings.root },
          { title: 'API', path: paths.dashboard.settings.api },
          { title: 'Team-Members', path: paths.dashboard.settings.teammembers },
          { title: 'Activity-Log', path: paths.dashboard.settings.teammembers },
          { title: 'Time Zone', path: paths.dashboard.settings.teammembers },
        ],
      },
    ],
  },
  {
    items: [{ title: 'Get Help', path: paths.dashboard.gethelp, icon: ICONS.gethelp }],
  },
];
