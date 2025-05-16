import React from 'react';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { CacheProvider, css, Global, ThemeProvider } from '@emotion/react';

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import '@/styles/reset.css';
import '@/styles/globals.css';

const apolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: '/api/graphql',
  }),
  cache: new InMemoryCache({}),
});

const montserrat = Montserrat({
  weight: ['300', '500', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
import createCache from '@emotion/cache';
import { theme } from '@/design-system/theme';

const cache = createCache({ key: 'next' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              :root {
                --core-typography-font-family-product: ${montserrat.style
                  .fontFamily};
              }
            `}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}
