import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
        <title>WeatherApp</title>
      <Head>
        <meta name="title" content="WeatherApp"/>
        <meta name="description" content="Accurate weather forecasts for your day-to-day."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="WeatherApp"/>
        <meta property="og:description" content="Accurate weather forecasts for your day-to-day."/>
        <meta property="og:image" content="https://i.ibb.co/yBRpKS8/Weather.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="WeatherApp"/>
        <meta property="twitter:description" content="Accurate weather forecasts for your day-to-day."/>
        <meta property="twitter:image" content="https://i.ibb.co/yBRpKS8/Weather.png"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
