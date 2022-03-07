import { useState } from 'react';
import { Icon } from '@iconify/react';
import windowsFilled from '@iconify/icons-ant-design/windows-filled';
import retweetOutlined from '@iconify/icons-ant-design/retweet-outlined';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  // boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 0),
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.success.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  color: theme.palette.success.main,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.success.darker, 0)} 0%, ${alpha(
    theme.palette.success.darker,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------


export default function AppTotalRT({ totalRT }) {
  const [total, setTotal] = useState(totalRT);
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={retweetOutlined} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(total)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total de retweets
      </Typography>
    </RootStyle>
  );
}
