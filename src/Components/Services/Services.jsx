import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow.svg';

const Services = () => {
    return (
        <div id='skills' className='services'>
            <div className="services-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="pattern" />
            </div>

            <div className="services-container">
                {Services_Data.map((service, index) => {

                    const [showMore, setShowMore] = useState(false);

                    return (
                        <div key={index} className='services-format'>
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>

                            <p>
                                {showMore ? service.s_more : service.s_desc}
                            </p>

                            <div 
                                className='services-readmore'
                                onClick={() => setShowMore(!showMore)}
                            >
                                <p>{showMore ? "Show Less" : "Read More"}</p>
                                <img src={arrow_icon} alt="arrow" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
