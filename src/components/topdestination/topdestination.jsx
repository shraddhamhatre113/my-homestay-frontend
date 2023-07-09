import DestinationCard from '../destinationcard/destinationcard';

import dest1 from '../../images/destination-1.jpg';
import dest2 from '../../images/destination-2.jpg';
import dest3 from '../../images/destination-3.jpg';
import dest4 from '../../images/destination-4.jpg';
import dest5 from '../../images/destination-5.jpg';
import dest6 from '../../images/destination-6.jpg';

const TopDestination = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3" style={{ width: '100%' }}>
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 + 'px' }}>Destination</h6>
                    <h1>Explore Top Destination</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <DestinationCard imgUrl={dest1}  city="Berlin"></DestinationCard>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <DestinationCard imgUrl={dest2}  city="Barcelona"></DestinationCard>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <DestinationCard imgUrl={dest3}  city="Bangkok"></DestinationCard>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <DestinationCard imgUrl={dest4}  city="Palma"></DestinationCard>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <DestinationCard imgUrl={dest5}  city="Arizona"></DestinationCard>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <DestinationCard imgUrl={dest6}  city="Monaco"></DestinationCard>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopDestination;