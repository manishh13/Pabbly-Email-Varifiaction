// import { Box } from '@mui/material';

// import { CONFIG } from 'src/config-global';
// import { DashboardContent } from 'src/layouts/dashboard';

// import PageHeader from 'src/components/page-header/page-header';

// import BigCard from 'src/sections/dashboard/components/big-card/big-card';
// import { APIKeyGenerate } from 'src/sections/api/components/api-card/api-card';
// import { CurrentSummaryView } from 'src/sections/current-summary/component/current-summary-tab';
// import { api_listItemes } from 'src/sections/dashboard/components/dashboard-big-card-list-items/dashboard-big-card-list-items';

// const imgPath = '../public/assets/images/big-card-thumbnail/email-verication-video-thumbnail.jpg';
// const { items, style } = api_listItemes;

// // ----------------------------------------------------------------------

// const metadata = { title: `Page five | Dashboard - ${CONFIG.site.name}` };

// export default function Page() {
//   return (
//     <DashboardContent maxWidth="xl" sx={{ display: 'flex', gap: 3 }}>
//       <PageHeader
//         title="API"
//         descriptions="Generate your API Key and Secret Key to perform email verifications directly through the Pabbly Email Verification API. "
//         buttontitle="Verify Email"
//         visibility="none"
//       />
//       <CurrentSummaryView />
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-around',

//           gap: 3,
//         }}
//       >
//         <BigCard
//           Items={items}
//           style={style}
//           buttontitle="Verify Email"
//           visibility="none"
//           img={imgPath}
//           buttonVisibility="none"
//           bigcardtitle="Points To Remember"
//         />

//         <APIKeyGenerate />
//       </Box>
//     </DashboardContent>
//   );
// }

import { CONFIG } from 'src/config-global';

import { APISummaryView } from 'src/sections/api/components/api-summary-view/api-summary-view';

// ----------------------------------------------------------------------

const metadata = { title: `Page two | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <APISummaryView />;
}
