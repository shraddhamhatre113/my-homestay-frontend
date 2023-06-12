import './search.css';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';


const Search = () => {
    useEffect(() => {
        // Update the document title using the browser API
        $('.date').datepicker({});
    });
    return (<div className="container-fluid booking  pb-5">
        <div className="container pb-5">
            <div className="bg-light shadow" style={{ padding: 30 + 'px' }}>
                <div className="row align-items-center" style={{ minHeight: 60 + 'px' }}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <input type="text" className='form-control p-4'></input>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <div className="input-group date">
                                        <input type="text" className="form-control p-4 " /><span className="input-group-addon"><i className="fa fa-calendar"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                <div className="input-group date">
                                        <input type="text" className="form-control p-4 " /><span className="input-group-addon"><i className="fa fa-calendar"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <a href="#" data-bs-toggle="dropdown" className="dropdown-toggle user-action nav-link">
                                    <input type="text" className="form-control p-4 " />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#"><i className="fa fa-user-o"></i> Profile</a></li>
                                        <li><a href="#"><i className="fa fa-calendar-o"></i> Calendar</a></li>
                                        <li><a href="#"><i className="fa fa-sliders"></i> Settings</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#"><i className="material-icons">&#xE8AC;</i> Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-block" type="submit" style={{ height: 47 + 'px', marginTop: -2 + 'px' }}>Find</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Search;