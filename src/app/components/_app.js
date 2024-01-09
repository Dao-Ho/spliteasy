// pages/_app.js
import { PeopleProvider } from '../app/peopleContext';

function MyApp({ Component, pageProps }) {
  return (
    <PeopleProvider>
      <Component {...pageProps} />
    </PeopleProvider>
  );
}

export default MyApp;
