import {useEffect, useState} from 'react'; 
import {useParams} from 'react-router-dom'; 

function StudentShow(props) {

    const {studentName} = useParams();

    const [currentStudent, setCurrentStudent] = useState({});

    useEffect(() => {
        const fetchStoods = async () => {
            const data = await fetch("../data.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            if (data.ok) {
                const parsedData = await data.json();
                const foundStudent = parsedData.find((student) => student.name === studentName);
                setCurrentStudent(foundStudent);
            } else {
                alert("Something went wrong :("); 
            }
        }
    }, [studentName])

    return (
        <>
            <h1>{currentStudent.name}</h1>
            <h2>{currentStudent.house}</h2>
            <h3>{currentStudent.gender}</h3>
            <h4>{currentStudent.ancestry}</h4>
            <img src={currentStudent.name} />
        </>
    )

}

export default StudentShow; 