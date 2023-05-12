import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';

// Styles
import '../styles/about.scss';
import '../styles/banner.scss';
import '../styles/camping.scss';
import '../styles/prizes.scss';
import '../styles/enterprise.scss';
import '../styles/footer.scss';
import '../styles/form.scss';
import '../styles/global.scss';
import '../styles/home.scss';
import '../styles/landing.scss';
import '../styles/nav.scss';
import '../styles/partners.scss';
import '../styles/activities.scss';
import '../styles/socials.scss';
import '../styles/team.scss';
import '../styles/typed.scss';
import '../styles/collapse.scss';
import '../styles/subscription.scss';
import '../styles/subscriptionClosed.scss';
import '../styles/mentors.scss';
import '../styles/low_code.scss';
import '../styles/not_programmer.scss';
import '../styles/online-meetings.scss';
import '../styles/sponsors.scss';

export default function MyApp({Component, pageProps}) {
  return (
    <div>
      <Head>
        <title>Supernova Hackathon</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="description"
          content=""
        />
        <meta itemProp="name" content="SupernovaLynbrook" />
        <meta
          name="google-site-verification"
          content="bbrVrhB_49iICKc-JLwkQG6qCWAQABQpCJ_ghVXOi2E"
        />
       <meta 
          property="og:image" 
          content="https://i.imgur.com/EHAiwns.png" 
        />
        <meta
          property="og:title"
          content="Supernova Hackathon"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Santa clara county's all girls hackathon! 12 hours where students create technological solutions to problems!"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
