import './destinationcard.css';

const DestinationCard = (props) => {
    return (
<div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={props.imgUrl} alt=""/>
                    <a className="destination-overlay text-white text-decoration-none" href={"/properties?city="+props.city}>
                        <h5 className="text-white">{props.city}</h5>
                        <span>100 Cities</span>
                    </a>
                </div>
    )
}
export default DestinationCard;