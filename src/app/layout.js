import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import Relay from '@/components/RelayProvider';
import { Hotbar } from '@/components/Hotbar';
import { MainLayout } from '@/components/MainLayout';
import "./general.css";

export const metadata = {
  title: 'profile',
  description: 'It is a profile',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Relay>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <MainLayout >
                <Hotbar/>
                {children}
              </MainLayout>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Relay>
      </body>
    </html>
  );
}
