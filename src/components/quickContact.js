/* eslint-disable */
import React from 'react';

const QuickContact = () => {
    return(
        <div className="quickContact">
            <div className="container">
                <div className="quickContact-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="323.937" height="329.09" viewBox="0 0 323.937 329.09">
                        <g id="Group_8" data-name="Group 8" transform="translate(-402 -2818.07)">
                            <path id="Path_74" data-name="Path 74" d="M294.98,174.229c16.946,42.646,38.692,60.157,43.776,88.117,4.8,27.96-6.778,66.37-34.174,83.881-27.4,17.793-70.324,14.4-126.245,1.695S53.505,312.618,27.8,262.346,19.614,134.124,64.237,84.982C109.143,35.839,181.444,15.5,223.526,39.511S278.034,131.582,294.98,174.229Z" transform="translate(386.123 2788.639)" fill="#00304d"/>
                            <g id="Group_5" data-name="Group 5" transform="translate(486.408 2919.792)">
                            <g id="Group_4" data-name="Group 4">
                                <path id="Path_75" data-name="Path 75" d="M133.373,95.181a82.331,82.331,0,0,1-25.856-4.118c-4.048-1.381-9.024-.114-11.494,2.423l-16.3,12.308C60.81,95.7,49.162,84.057,39.206,65.29l11.946-15.88a11.721,11.721,0,0,0,2.883-11.876,82.456,82.456,0,0,1-4.134-25.9A11.649,11.649,0,0,0,38.266,0H11.636A11.649,11.649,0,0,0,0,11.636C0,85.179,59.83,145.009,133.373,145.009a11.649,11.649,0,0,0,11.636-11.636V106.817A11.65,11.65,0,0,0,133.373,95.181Z" fill="#fff"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="quickContact-right">
                <h2>Pogadajmy</h2>
                    <p>Zostaw swój numer telefonu, oddzwonię najszybciej jak się da,
aby porozmawiać na temat Twojej nowej strony internetowej.</p>

                    <form className="quickContact-form" name="CallToCustomer" netlify-honeypot="bot-field" data-netlify="true">
                        <input type="hidden" name="bot-field" />
                        <div className="item">
                        <input type="tel" name="customerPhone" placeholder="739907919" />
                        <button type="submit" className="btn btn-primary">Wyślij</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default QuickContact;