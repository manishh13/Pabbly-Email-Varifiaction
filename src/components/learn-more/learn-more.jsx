import { Typography } from '@mui/material';

export default function LearnMoreTypography({ childeren, ...props }) {
  return (
    <Typography
      component="span"
      {...props}
      sx={{ color: '#078DEE', textDecoration: 'underline', cursor: 'pointer', ...props.sx }}
    >
      Learn More
    </Typography>
  );
}
