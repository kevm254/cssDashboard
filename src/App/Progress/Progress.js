import React from 'react';
import BrowserRates from './BrowserRates';
import ProgressTask from './ProgressTask';

export default (props) => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                        <div className="row mb-4 align-items-center">

                            <div className="col-xl-6 col-12 mb-4 mb-xl-0">
                                <div className="bg-dark text-white p-4 rounded">

                                        <BrowserRates browser="Google Chrome" percentage={5} />
                                        <BrowserRates browser="Mozilla Firefox" percentage="82%" />
                                        <BrowserRates browser="Safari" percentage="67%" />
                                        <BrowserRates browser="IE" percentage="10%" />

                                </div>
                            </div>

                            <div className="col-xl-6 col-12">
                                <h4 className="text-muted p-3 mb-3">Tasks:</h4>
                                <ProgressTask />
                                <ProgressTask />
                                <ProgressTask />
                                <ProgressTask />
                                <ProgressTask />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
