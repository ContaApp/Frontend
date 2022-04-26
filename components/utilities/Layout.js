import Head from 'next/head'
import NavBar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
    return ( 
        <>
           <Head>
                <title>tuContapp</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Nunito:wght@400;600;800&display=swap" rel="stylesheet"/>
             </Head>
             <NavBar/>
                {children}
             <Footer/>
        </>
     );
}

export default Layout;