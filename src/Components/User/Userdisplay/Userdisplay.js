import React from 'react';
import './Userdisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCoffee, faMale, faMinus, faMoneyBillAlt, faUserMd } from '@fortawesome/free-solid-svg-icons';

const Userdisplay = (props) => {
    const cart = props.cart;
    return (
        <div>
            <div>
                <h4 className="text-warning">people Added: {cart.length}</h4>
            </div>
            <div>
                {
                    cart.map(item => <div className="cards" style={{ width: "20rem", }}>
                        <div className="imagess">
                            <img src={item.avatar} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <div className="card-color">
                                <h5 className="card-title text-center"><FontAwesomeIcon icon={faMale} /> Name: {item.name}</h5>
                                <p className="card-text"><span className="card-infos"><FontAwesomeIcon icon={faUserMd} /> job Tittle:</span> {item.jobtittle}</p>
                                <p className="card-text"><span className="card-infos"><FontAwesomeIcon icon={faBuilding} /> Company Name:</span> {item.companyname}</p>
                                <p className="card-text"><span className="card-infos"><FontAwesomeIcon icon={faMoneyBillAlt} /> Salary: </span> ${item.salary}</p>
                            </div>
                            <div className="d-flex justify-content-center align-content-center button">
                                <button className="btn btn-primary"><FontAwesomeIcon icon={faMinus} /> Remove</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default Userdisplay;