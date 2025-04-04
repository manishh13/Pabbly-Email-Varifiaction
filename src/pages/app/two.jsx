import { Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const metadata = { title: `Page two | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      {/* <Helmet>
        <title> {metadata.title}</title>
      </Helmet> */}

      <Typography>page 2</Typography>
    </>
  );
}
