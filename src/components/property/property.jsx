const Property = (props) => {
    return (<div className="package-item mb-2">
        <img className="img-fluid" src={props.imageUrl} alt="" />
        <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
            </div>
            <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
            <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                    <h5 className="m-0">$350</h5>
                </div>
            </div>
        </div>
    </div>)
}
export default Property;