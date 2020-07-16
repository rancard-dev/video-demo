import React, {useState} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import ReactPlayer from "react-player"



function App() {

    const [verified, setVerified] = useState(false);
    // const [phone, setPhone] = useState("");
    // const [pin,setPin] = useState("");
    const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Helmet>
        <title>Rancard Video Platform</title>
      </Helmet>

        <div className={"app-header"}>
            <h4>Rancard Video Platform -  Demo</h4>
        </div>

        <div className={"app-body"}>
            <div className={"app-video-container"}>
                <div>
                    <ReactPlayer
                        controls={true}
                        url="https://vimeo.com/3155182"
                    />

                    <div className={"video-details"}>
                        <h2>Test Skating</h2>
                        <p>This is a small description about the video</p>
                    </div>
                </div>
            </div>

            <div className={"more-content-container"}>
                More Content
            </div>

        </div>


        <div className={`modal-verify ${verified ? "modal-hide" : "modal-show"}`}>

            <div className={"modal-container"}>
                <div >
                    {
                        loading && <div>Loading please wait....</div>
                    }
                </div>
                <input type="phone" placeholder={"Phone number"} name={"msisdn"} className={"modal-input"}/>
                <input type="number" placeholder={"Pin"} name={"pin"} className={"modal-input"}/>

                <button onClick={()=>{
                    setLoading(true);
                    setTimeout(()=>{
                        setLoading(false);
                        setVerified(true);
                    }, 2000)
                }} disabled={loading} className={"btn btn-verify"}>Verify</button>
                <button onClick={()=>{
                    setLoading(true);
                    setTimeout(()=>{
                        setLoading(false);
                        setVerified(true)
                    }, 2000)
                }} disabled={loading} className={"btn btn-subscribe"}>Subscribe</button>
            </div>

        </div>

    </div>
  );
}

export default App;
