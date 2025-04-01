import React from 'react';

import { useTheme } from '@mui/material/styles';

import { useLocation } from 'react-router-dom';

import { varAlpha } from 'src/theme/styles';

import { FooterSection } from './footer-section ';

export function FooterBase({ sx }) {
  const location = useLocation();
  const theme = useTheme();
  return (
    <FooterSection
      sx={{
        backgroundColor: 'common.white',
        borderTop: '1px dashed',
        borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.3),
        height: '40px',
        ...sx,
      }}
    />
  );
}
