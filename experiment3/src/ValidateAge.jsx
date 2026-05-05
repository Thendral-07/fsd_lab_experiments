import react from 'react'
function ValidateAge(){
    const[age,setAge] = useState(0);
    const[error,setError] = useState(0);
    const[success,setSuccess] = usestate('');
    const handleAge = (event) =>{
        const value = event.target.value;
        setAge(value);
        if(value>=18 || value<=100){
            setSuccess("Age is valid");
        }
        else{
            setError("Age is invalid")
        }
    }
    return
}
export default ValidateAge;