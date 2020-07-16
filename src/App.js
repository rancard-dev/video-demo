import React, {useState} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import ReactPlayer from "react-player"



function App() {

    const [verified, setVerified] = useState(false);
    const [modalPage, setModalPage] = useState("subscribe");
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

                {
                    modalPage === "subscribe" ?
                        <input type="phone" placeholder={"Phone number"} name={"msisdn"} className={"modal-input"}/>

                        :
                        <input type="number" placeholder={"Enter Pin to verify"} name={"pin"} className={"modal-input"}/>


                }


                {
                    modalPage === "subscribe" ?
                        <button onClick={()=>{
                            setLoading(true);
                            setTimeout(()=>{
                                setLoading(false);
                                setModalPage("verify")
                            }, 2000)
                        }} disabled={loading} className={"btn btn-subscribe"}>Subscribe</button>
                        :

                        <button onClick={()=>{
                            setLoading(true);
                            setTimeout(()=>{
                                setLoading(false);
                                setVerified(true);
                            }, 2000)
                        }} disabled={loading} className={"btn btn-verify"}>Verify</button>
                }



                {
                    modalPage === "subscribe" ? <div style={{color:"gray"}}>
                        I already have a pin <span className={"option-change"} onClick={()=> setModalPage("verify")}>Verify</span>
                    </div> :<div style={{color:"gray"}}>
                        You do not have a pin ? <span className={"option-change"} onClick={()=> setModalPage("subscribe")}>Subscribe</span>
                    </div>
                }
            </div>

        </div>

    </div>
  );
}

export default App;
