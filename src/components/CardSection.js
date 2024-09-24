import React from 'react'
import icon1 from "../assets/icons/carbon_notebook-reference.svg"
import icon2 from "../assets/icons/Vector.svg"
import icon3 from "../assets/icons/Robot.svg"
import icon4 from "../assets/icons/IdentificationCard.svg"


const CardSection = () => {
    const cardObj = [{ "icon" : icon1 , "title": "Prove your skills", "descp": "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions." },
                     { "icon" : icon2 , "title": "Learn from community", "descp": "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them." },
                     { "icon" : icon3 , "title": "Challenge yourself", "descp": "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder." },
                     { "icon" : icon4 , "title": "Earn recognition", "descp": "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards." }
       ]
  return (
    <div className='card-section'>
        <h1>Why Participate in <span>AI Challenges?</span></h1>
        <div className="cards">
            {cardObj.map((item,key)=>{
                return(
                    <div className="grid-card-items">
                        <div className='card-content'>
                            <img src={item.icon} alt={`icon${key}`} style={{"width": "55px","height": "55px",}} />
                            <h3>{item.title}</h3>
                            <p>{item.descp}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CardSection