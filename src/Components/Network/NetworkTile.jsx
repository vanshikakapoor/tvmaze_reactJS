import { useState } from 'react';
import './NetworkTile.css';

export default function NetworkTile({ImageLink, channel_name}) {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return(
        <div className="network_card">
            <img src={ImageLink} alt={channel_name} />
            <div className="network_details">
                <div className="network_name_heading">{channel_name}</div>
                <div className='network_divider'></div>
                <div className="network_liked" onClick={toggleLike}>
                    <svg 
                        className={`heart ${liked ? 'liked' : ''}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill={liked ? '#f1c40f' : '#ffffff'} 
                        width="24px" 
                        height="24px">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
