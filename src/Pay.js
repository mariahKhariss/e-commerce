import {React, useState} from 'react';
import PaystackPop from '@paystack/inline-js';

function Pay() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [Amount, setAmount] = useState('');

    const paywithPaystack = (e) => {
       
       const paystack = new PaystackPop()
       paystack.newTransaction({
           key:"pk_test_e5acce998561bbb2b34494b276243ae8ca408f7b",
           amount:Amount *100,
           email,
           firstName,
           lastName
       })
    }
    return (
        <div>
           <div className="container">
            <h4 className="display-6 text-center bg-success text-light">make payment</h4>

        <div className="row">
            <div className="col-6 mx-auto p-2 m-3 shadow">
        
        <input type= "text" name="first_name" placeholder= "first name" className="form-control mb-3" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
        <input type= "text" placeholder= "last name" className="form-control mb-3" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
        <input type= "text" placeholder= "email" className="form-control mb-3" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <input type= "text" placeholder= "Amount" className="form-control mb-3" value={Amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button className="btn btn-success p-2 w-100" onClick={paywithPaystack}>Pay</button>
        



            </div>
        </div>
    </div>
 
        </div>
    )
}

export default Pay;
