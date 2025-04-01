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
        path: paths.dashboard.group.root,
        icon: ICONS.settings,
        children: [
          { title: 'Credit Summary', path: paths.dashboard.group.root },
          { title: 'API', path: paths.dashboard.group.api },
          { title: 'Team-Members', path: paths.dashboard.group.teammembers },
        ],
      },
    ],
  },
  {
    items: [{ title: 'Get Help', path: paths.dashboard.gethelp, icon: ICONS.gethelp }],
  },
];
