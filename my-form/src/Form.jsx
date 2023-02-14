import {useState} from 'react';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // Phone number
    const [phone, setPhoneNumber] = useState("");
    // Phone type: Home, Work, or Mobile (dropdown menu)
    const [phoneType, setPhoneType] = useState("");
    // Staff: Instructor or Student (radio buttons)
    const [staff, setStaff] = useState("");
    // Bio (text area)
    const [bio, setBio] = useState("");
    // Sign up for email notifications (checkbox)
    const [receiveNotification, setReceiveNotification] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        if (validateName(document.getElementById("nameInput").value)) setName(document.getElementById("nameInput").value);
        else alert("Name is not valid");

        if(validateEmail(document.getElementById("emailInput").value)) {
            setEmail(document.getElementById("emailInput").value); 
        } else {
            alert("Email is invalid"); 
        }
        
        if(validatePhoneNumber(document.getElementById("phoneNumberInput").value)) {
            setPhoneNumber(document.getElementById("phoneNumberInput").value) 
        } else {
            alert("Phone number is invalid");
        }
        
        setName("");
        setEmail("");
        setPhoneNumber("");
        setPhoneType("");
        setStaff("");
        setBio("");
        setReceiveNotification(true); 

    }

    const validateName = (name) => {
        let res = /^[a-zA-Z]+$/.test(name);
        return res;
    }

    const validateEmail = (email) => {
        let res = /^([a-zA-Z]*)@*([a-zA-Z]*)\.*[a-zA-Z]*$/.test(email);
        return res;
    }

    const validatePhoneNumber = (phoneNumber) => {
        let res = /^(\d{3})-(\d{3})-(\d{4})$/.test(phoneNumber);
        return res;
    }


    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up!</h1>
                <label>Name
                    <input type="text" id = "nameInput" placeholder="Name"/>                
                </label>
                <br />
                <label>Email
                    <input type="text" id="emailInput" placeholder="Email"/> 
                    {/* <input type="text" onChange={(e) => {validateEmail(e.currentTarget.value) ? setEmail(e.currentTarget.value) : alert("Email is not valid")}} value={email} />                */}
                </label>
                <br />
                <label>Phone Number
                    <input type="text" id="phoneNumberInput" placeholder="123-456-7890"/>
                </label>
                <br />
                <label>Phone Type
                    <select id="dropdown">
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>            
                </label>
                <br />
                <label>
                    <input type="radio" name="radio" value="staff" />Staff
                    <input type="radio" name="radio" value="student" />Student
                </label>
                <br />
                <label>Bio
                    <textarea col="50" row="50" maxLength="280"  placeholder="Write description here"/>                
                </label>
                <br />
                <label>Set Notifications?
                    <input type="checkbox" />
                </label>
                <br />
                <input type="submit" value="Register" />
            </form>
        </>
    )
}

export default Form; 