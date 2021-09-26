import React from 'react';
import './Member.css'
const Member = (props) => {
    // console.log(props);
    const {name,picture,company,gender,age,email,salary} = props.worker;
    return (
        <div className="member">
            <img src={picture} alt=""/>
            <h2>Name:</h2>
            <h2 className="name">{name}</h2>
            <h3>Company: {company}</h3>
            <h4>Gender: {gender}</h4>
            <h4>Age: {age}</h4>
            <h4>Salary: {salary}</h4>
            <p><small>Email: {email}</small></p>
         
            <button onClick={() => props.handleAddMember(props.worker)}><i class="fas fa-cart-plus"></i> Add to cart</button>
       </div>
    );
};

export default Member;