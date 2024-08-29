import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({Component, pageProps}){
    return (
        <>
        <Component {...pageProps} />{'>'}
        <SpeedInsights></SpeedInsights>
        </>
    )
}

export default MyApp;