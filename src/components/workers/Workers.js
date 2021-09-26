import React, { useEffect, useState } from 'react';
import Addmember from '../add-member/Addmember';
import Member from '../worker-member/Member';
import './Workers.css'
const Workers = () => {
    const [workers , setworkers] = useState([]);
    const[member , setMember] = useState([])
    useEffect(()=>{
        fetch('./persons.JSON')
        .then(res=>res.json())
        .then(data=>setworkers(data))
    },[]);
    const handleAddMember = (worker) =>{
       const newMember = [...member,worker];
       setMember(newMember)
    }
    return (
        <div className="worker-container">
            <div className="member-container">
            {
                workers.map(worker => <Member
                key={worker._id}
                worker={worker}
                handleAddMember={handleAddMember}
                ></Member>)
            } 
            </div>
            <div>
                 <Addmember
                  member={member}
                  >
                </Addmember>
            </div>
        </div>
    );
};

export default Workers;