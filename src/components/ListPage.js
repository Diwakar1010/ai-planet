import React from 'react'
import rocketLogo from "../assets/PicsArt_04-14-04.42 1.svg"
import icon1 from "../assets/icons/Group 1000002515.svg"
import icon2 from "../assets/icons/Group 1000002516.svg"
import icon3 from "../assets/icons/Group 1000002518.svg"
import { Link } from 'react-router-dom'


const ListPage = () => {
    const iconObj = [{ "icon" : icon1 , "count": "100K+", "descp": "AI model submissions" },
                     { "icon" : icon2 , "count": "50K+", "descp": "Data Scientists" },
                     { "icon" : icon3 , "count": "100+", "descp": "AI Challenges hosted" }
                    ]

  return (
    <div className='list-page'>
        <aside className='vertical-bar'></aside>
        <div className='p-1'><p>Accelerate Innovation with Global AI Challenges</p></div>
        <div className='p-2'><p>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p></div>
        <Link to={"/create-challenge" }><button className='create-btn'><span>Create Challenge</span></button></Link>
        <img src={rocketLogo} alt='rocket-logo' className='rock-logo'/>
        <div className='footer'>
            <div className='footer-item'>
                 {iconObj.map((item,key)=> {
                    return(
                        <div className="obj-class">
                        <img src={item.icon} alt={`logo${key}`} />
                        <div className='p-3'>
                        <p className='count'>{item.count}</p>
                        <p className='descp'>{item.descp}</p>
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ListPage