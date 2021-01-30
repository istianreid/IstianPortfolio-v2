import React from 'react';
import Typical from 'react-typical'

const Loader = () => {

    return(
        <>
            <div class="loaderWrapper">
                <div class="loader">
                        <Typical
                            className="loader-text"
                            steps={['<Istian />', 10000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                </div>
            </div>

        </>
    )
}

export default Loader