import React from 'react';
import BrowserRates from './BrowserRates';

export default (props) => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                        <div className="row mb-4 align-items-center">

                            <div className="col-xl-6 col-12 mb-4 mb-xl-0">
                                <div className="bg-dark text-white p-4 rounded">

                                        <BrowserRates browser="Google Chrome" percentage="91%" />
                                        <BrowserRates browser="Mozilla Firefox" percentage="82%" />
                                        <BrowserRates browser="Safari" percentage="67%" />
                                        <BrowserRates browser="IE" percentage="10%" />

                                </div>
                            </div>

                            <div className="col-xl-6 col-12"></div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
