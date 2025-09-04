import React from "react"
import "../Styles/mainpanel.css"
import profile from '../assets/profile.png'
import code from '../assets/code_icon.png'
import compass from '../assets/compass_icon.png'
import bulb from '../assets/bulb_icon.png'
import msg from '../assets/msg_icon.png'
import { IoMdMic, IoIosSend } from "react-icons/io";
import { GrGallery } from "react-icons/gr";

function Mainpanel() {
    return (
        <>
            <div className="mainpanel">
                <div className="nav">
                    <p> Gemini </p>
                    <img src={profile} alt="" className="profile" />
                </div>

                <div className="centercontainer">
                    <div className="greet">
                        <p><span> Hello, Hallen. </span></p>
                        <p> How can i help u today ? </p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p> Suggest beautiful places to see on an upcoming road trip. </p>
                            <img src={compass} alt="" className="icon" />
                        </div>
                        <div className="card">
                            <p> Briefly Summarize the concept : Governance. </p>
                            <img src={bulb} alt="" className="icon" />
                        </div>
                        <div className="card">
                            <p> Brainstrom team bonding activites for our work retreat. </p>
                            <img src={msg} alt="" className="icon" />
                        </div>
                        <div className="card">
                            <p> Improve the readability of the following code. </p>
                            <img src={code} alt="" className="icon" />
                        </div>
                    </div>
                </div>

                <div className="mainbottom">
                    <div className="searchbox">
                        <input type="text" placeholder="Enter a prompt here " />
                        <div>
                            <IoMdMic />
                            <GrGallery />
                            <IoIosSend />
                        </div>
                    </div>
                    <p className="bottominfo">
                        Gemini may display inaccurate information, including about people, so double-check its responses.
                        <br />
                        Your privacy and Gemini apps.
                    </p>

                </div>
            </div>
        </>
    )
}

export default Mainpanel;