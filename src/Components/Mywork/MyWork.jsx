import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow.svg'

const MyWork = () => {
    return (
        <div>
            <div id='work' className='mywork'>
                <div className="mywork-title">
                    <h1>My Latest Work</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className='mywork-container'>
                    {mywork_data.map((work, index) => {
                        return (
                            <div key={index} className="mywork-item" onClick={() => window.open(work.w_link, "_blank")}>
                                <img src={work.w_img} alt={work.w_name} />
                                <div className="mywork-hover">
                                    <h3>{work.w_name}</h3>
                                    <div className="live-link-btn">
                                        <span>View Live</span>
                                        <img src={arrow_icon} alt="" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mywork-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>


        </div>
    )
}

export default MyWork