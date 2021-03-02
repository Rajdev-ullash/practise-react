import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Userinfo from './Userinfo/Userinfo';
import Userdisplay from './Userdisplay/Userdisplay';
import './User.css'

const User = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(fakeData);
    }, [])
    const [people, setPeople] = useState([]);
    const handleAddPeople =(peoples) => {
        // e.preventDefault();
        const newPeople = [...people, peoples];
        setPeople(newPeople);
        // e.preventDefault();

    }
    // const [remove, setRemove] = useState([]);
    // const removePeople = e => {
    //     const peopleRemove = (remove.slice(remove.indexOf(e.target.cart, 1)));
    //     setRemove(peopleRemove);
    // }
    return (
        <div>
            <h1>Total Data: {data.length}</h1>
            <div className="data">
                <div className="data-container">
                    {
                        data.map(user => <Userinfo user={user} handleAddPeople={handleAddPeople}></Userinfo>)
                    }
                </div>
                <div className="data-display">
                    {/* <h1>This is cart</h1>
                    <h1>people: {people.length}</h1> */}
                    <Userdisplay cart={people}></Userdisplay>
                </div>
            </div>
        </div>
    );
};

export default User;