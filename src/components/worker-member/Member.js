import React from 'react';
import './Member.css'
const Member = (props) => {
    // console.log(props);
    const {name,picture,company,gender,age,email,salary} = props.worker;
    return (
        <div className="member">
            <img src={picture} alt=""/>
            <h4>Name:</h4>
            <h2 className="title-name">{name}</h2>
            <h3>Company: {company}</h3>
            <h4>Gender: {gender}</h4>
            <h4>Age: {age}</h4>
            <h4>Salary: ${salary}</h4>
            <p><small>Email: {email}</small></p>
         
            <button onClick={() => props.handleAddMember(props.worker)}><i class="fas fa-cart-plus"></i> Add to cart</button>
           <div className="link">
           <a href="#1"><i class="fab fa-linkedin icon"></i></a>
           <a href="#2"><i class="fab fa-facebook icon"></i></a>
           <a href="#3"><i class="fab fa-google-plus-g icon"></i></a>
           </div>
       </div>
    );
};

export default Member;