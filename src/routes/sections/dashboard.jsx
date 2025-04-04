import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const Dashboard = lazy(() => import('src/pages/app/dashboard'));
const PageTwo = lazy(() => import('src/pages/app/two'));
const GetHelp = lazy(() => import('src/pages/app/get-help'));
const CreditSummary = lazy(() => import('src/pages/app/credit-summary'));
const API = lazy(() => import('src/pages/app/api'));
const TeamMembers = lazy(() => import('src/pages/app/team-members'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'app',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <Dashboard />, index: true },
      // { path: 'two', element: <PageTwo /> },
      // { path: 'get-help', element: <GetHelp /> },
      // { path: 'get-help', element: <CreditSummary /> },
      { path: 'get-help', element: <API /> },
      {
        path: 'settings',
        children: [
          // { element: <CreditSummary />, index: true },
          { path: 'credit-summary', element: <CreditSummary /> },
          { path: 'api', element: <API /> },
          { path: 'team-members', element: <TeamMembers /> },
        ],
      },
    ],
  },
];
