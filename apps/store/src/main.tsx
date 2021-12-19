import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Thema } from '@monorepo-store/thema';
import App from './app/app';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Thema>
          <App />
        </Thema>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root'),
);
