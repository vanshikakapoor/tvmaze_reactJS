import './Dashboard.css'
import Filter from './Filter';
import NetworkTile from './Network/NetworkTile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { fetchNetworks } from '../Store';
export default function Dashboard() {
    const dispatch = useDispatch();
    const [sortOption, setSortOption] = useState(0); 
    const networkList = useSelector((state) => {
        return state.networks.data.data || []
    });
    console.log(networkList); // Add this line to check the value

    useEffect (() => {
        dispatch(fetchNetworks())
    }, []);

    const sortedNetworkList = [...networkList].sort((a, b) => {
        switch (sortOption) {
            case 1: // Most popular (assuming higher "like" count means more popular)
                return b.like - a.like;
            case 2: // Least popular
                return a.like - b.like;
            case 3: // A to Z (by channel name)
                return a.channel_name.localeCompare(b.channel_name);
            case 4: // Z to A (by channel name)
                return b.channel_name.localeCompare(a.channel_name);
            default:
                return 0;
        }
    });

    const handleSortChange = (value) => {
        console.log('Sorting option selected:', value); // Debugging
        setSortOption(value);
    };

    return(
        <div className='Dashboard_layout row'>
        <div className='network_dashboard col-7 d-flex-grow'>
            <div className='Network-heading'> Networks </div>
            <div className="Network-list-container">
            {sortedNetworkList.map((network) => (
                        <div key={network.id}> 
                            <NetworkTile ImageLink={network.ImageLink} channel_name={network.channel_name} /> 
                        </div>
                    ))}
            </div>
        </div>
         <div class="dropdown-container col">
            <Filter onSortChange={handleSortChange} />
        </div> 
        </div>
    );
}