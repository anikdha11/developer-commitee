import React from 'react';
import './Addmember.css'
const Addmember = (props) => {
const {member} = props;
let total = 0;
let addName = [];
for (const worker of member ){
   const salary = parseInt( worker.salary);
   total = total + salary;
     addName = worker.name;
}
    return (
        <div className="cart">
                   <p>Add-Members: {props.member.length}</p>
                   <p>Members-Name:{addName}</p>
                   <p>Members-salary: ${total} </p>
        </div>
    );
};

export default Addmember;