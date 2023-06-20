import Property from "../property/property";


import pack1 from '../../images/package-1.jpg';
import pack2 from '../../images/package-2.jpg';
import pack3 from '../../images/package-3.jpg';
import pack4 from '../../images/package-4.jpg';
import pack5 from '../../images/package-5.jpg';
import pack6 from '../../images/package-6.jpg';
const TourPackages = () => {
    return (<div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5+'px'}}>Packages</h6>
                <h1>Pefect Tour Packages</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <Property imageUrl={pack1}></Property>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Property imageUrl={pack2}></Property>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Property imageUrl={pack3}></Property>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Property imageUrl={pack4}></Property>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Property imageUrl={pack5}></Property>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Property imageUrl={pack6}></Property>
                </div>
            </div>
        </div>
    </div>


    );
}
export default TourPackages;