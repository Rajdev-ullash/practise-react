import React from 'react';
import './Userinfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faLanguage, faMale, faMoneyBillAlt, faUserMd, faStarHalf, faUniversity, faPlus } from '@fortawesome/free-solid-svg-icons';

const Userinfo = (props) => {
    const { avatar, name, companyname, salary, jobtittle, language, llinkdin, universtity } = props.user;
    console.log(props.user);
    return (
        <div>
            <div className="card" style={{ width: "25rem" }}>
                <div className="images">
                    <img src={avatar} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-color">
                        <h5 className="card-title text-center"><FontAwesomeIcon icon={faMale} /> Name: {name}</h5>
                        <p className="card-text"><span className="card-info"><FontAwesomeIcon icon={faUserMd} /> job Tittle:</span> {jobtittle}</p>
                        <p className="card-text"><span className="card-info"><FontAwesomeIcon icon={faBuilding} />Company Name:</span> {companyname}</p>
                        <p className="card-text"><span className="card-info"><FontAwesomeIcon icon={faLanguage} /> Language:</span> {language}</p>
                        <p className="card-text"><span className="card-info"><FontAwesomeIcon icon={faStarHalf} /> Linkding:</span> {llinkdin}</p>
                        <p className="card-text"><span className="card-info"><FontAwesomeIcon icon={faMoneyBillAlt} /> Salary: </span> ${salary}</p>
                        <p className="card-text"><span className="card-info"><FontAwesomeIcon icon={faUniversity} /> University: </span> {universtity}</p>
                    </div>
                    <div className="d-flex justify-content-center align-content-center button">
                        <button className="btn btn-primary" onClick={() => { props.handleAddPeople(props.user) }}><FontAwesomeIcon icon={faPlus} /> Add People</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userinfo;