import React , { useEffect , useState} from 'react'

import Nav from './Nav'
import Socials from './Socials'
import Email from './Email'
import Hero from './Hero'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Sliders from './Sliders'
import Loader from './Loader'

function Home() {

    const [loading, setLoading] = useState();
    const [done, setDone] = useState();
  
    useEffect(() => {
  
        setTimeout(() => {
          setLoading(true)
            setTimeout(() => {
                setDone(true)
            }, 1500)
        }, 2000);
  
    }, [])
  


    return (
        <>
            {!done ? (
                <Loader loading = {loading} />
                ) : (
                    <>
                        <Nav />
                        <Socials />
                        <Email />
                        <Hero />
                        <About />
                        <Work />
                        <Contact />
                        <Sliders />
                    </>
                )}
        </>
    );
}

export default Home;
