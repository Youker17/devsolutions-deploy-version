import MainSeo from '@/SEOHeads/MainSeo';
import RootLayout from '@/components/Layout'
import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
        {/* <MainSeo /> */}
        <NextNProgress options={{ easing: 'ease', speed: 500 , showSpinner: false }}  color="white"  />
       <Component {...pageProps} />
    </RootLayout>
  ) 
}
