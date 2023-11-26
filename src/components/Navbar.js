import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';

const ResponsiveAppBar = () => {
  const pagetodisplayonNavbar = ['New Customer', 'Referrals'];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <AddLinkIcon sx={{ display: { xs: 'none', md: 'flex' }, marginRight: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 500,
                color: 'inherit',
              }}
            >
              Apna Sansar
            </Typography>
            {pagetodisplayonNavbar.map((page, index) => (
              <Link key={index} to={`/${page.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>
                {page}
              </Link>
            ))}
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
