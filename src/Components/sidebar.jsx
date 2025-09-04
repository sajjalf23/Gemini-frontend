import '../Styles/sidebar.css';
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { IoBulbOutline } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react"

function Sidebar() {

    const [extended, setextended] = useState(false);

    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <div className="menu">
                        <IoMenu className='img' onClick={() => setextended(!extended)} />
                    </div>
                    <div className={`newc ${!extended ? "afterextended" : ""}`}>
                        <FaPlus className='img' />
                        {extended ? <p className='newp'> NewChat  </p> : <></>}
                    </div>

                    {extended ?
                        <>
                        <div className="recent">
                            <p className="recent_title"> Recent </p>
                            <div className="recententry">
                                <LuMessageSquare className='img' />
                                <p className='entity'> What is React.js ... </p>
                            </div>
                        </div> </>
                        : 
                        <> </>
                    }
                </div>
                <div className="bottom">
                    {extended ? <>
                        <div className="bottomitem">
                            <IoBulbOutline className='img' />
                            <p className='title'> Help </p>
                        </div> 
                        <div className="bottomitem">
                            <LuHistory className='img' />
                            <p className='title'> History </p>
                        </div> </> 
                    :
                        <></>
                    }
                    <div className="bottomitem">
                        <IoSettingsOutline className='img' />
                        {extended ? <p className='title'> Settings </p> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
