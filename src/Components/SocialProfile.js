import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data//socialProfile';

class SocialProfile extends Component {
    render() {
        const { link, image } = this.props.socialProfile;

        return (
            <span>
                <a href={link} > 
                   <img src={image} 
                   alt='social_profile'
                   style={{width : 35, height : 35, margin : 10}} /> 
                </a>

            </span>
        )
    }
};

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Let's Connect !</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(S => {
                            return <SocialProfile key={S.id} socialProfile={S} />;
                        })
                    }
                </div>
            </div>
        );
    };
};

export default SocialProfiles;