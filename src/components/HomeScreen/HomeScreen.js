import React, { useState } from "react"

const HomeScreen = () => {
    const [input, setInput] = useState('');
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex flex-column align-items-center justify-content-center mt-5">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="Google Logo"
                        className="mx-auto my-3"
                    />
                    <div className="formDiv col-md-5 mx-auto border my-5 d-flex py-1 justify-content-between align-items-center">
                        <i className="fa fa-search mx-1"></i>
                        <form style={{ width: '100%' }} className="ml-2">
                            <input type="text"
                                className="form-control border-0"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                style={{ outline: 'none !important' }}
                            />
                        </form>
                        {input ? <i className="fa fa-times mx-1"></i> : null}
                        <button type="button" className="btn mx-1">
                            <i className="fa fa-microphone mx-1"></i>
                        </button>
                    </div>
                    <div className="buttons col-md-4 ml-5 mt-4 align-items-center justify-content-center">
                        <button type="button" className="btn btn-default">Google Search</button>
                        <button type="button" className="btn btn-default">Felling Good</button>
                    </div>
                    <div className="buttons col-md-4 ml-5 mt-4 align-items-center justify-content-center">
                        <button type="button" className="btn btn-default">Google offered in : English</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeScreen;