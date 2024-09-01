import React from "react";
import ReactDOM from 'react-dom'



function Home() {

    const styleh1 =
    {
        fontFamily: "Single Day",
        fontSize: '4rem',
        fontWeight: 400,
        // lineHeight: '93.59px',
        color: "#72DB73",
        textAlign: 'center',
        marginTop: '20px',
        marginBottom:'0px'

    }

    const styleh2 =
    {
        fontFamily: "DM Sans",
        fontSize: "25px",
        fontWeight: 400,
        textAlign: "center",
        marginBottom: "30px",
        marginTop:'0px'
    }

    const [data,setData]=React.useState({name: "", username:"",email:"",mobile:"", checkbox:false })

    // const [state,setState]=React.useState(false);

    function handleChange(event){
        // const newValue=event.target.value;
        // const name=event.target.name;
        const{name,value,checked}=event.target;

        // function newData(data){
        //     return({...data,[name]:value})
        // }

        setData((prevValue)=>{return{...prevValue,[name]: name==='checkbox'?checked:value }});
    }


    const [errors,setError]=React.useState({
        name:"", username:"",email:"",mobile:"",checkbox:''})



    // function handleCheckboxChange(event){

    //     const{name,value}=event.target;

    //     setState(isChecked);

    // }

    function handleSubmit(event){

        event.preventDefault()

        let errors={};
        if(!data.name || data.name.trim()===''){
            errors.name='Field is required';
        }

        if(!data.username|| data.username.trim()===''){
            errors.username='Field is required';
        }

        if(!data.email || data.email.trim()===''){
            errors.email='Field is required';
        }
        if (!data.mobile || data.mobile.trim()===''){
            errors.mobile='Field is required';
        }
        if(!data.checkbox){
            errors.checkbox='Field is required';
        }

        setError(errors);
        if (Object.keys(errors).length > 0) return
        else {
            alert("Form submitted successfully")
            localStorage.setItem("userData", JSON.stringify(data))
            setData({
                name: "",
                username: "",
                email: "",
                mobile: "",
                checkbox: false,
            })
    }
    }


    return (<div>

        <div className="container-column" style={{ display: "flex", flexDirection: "row", gap: "20px" }
        }>
            <div className="col-one" > <img style={{ width: '40vw', height: '99vh', maxHeight: '99%' }} src="../public/assets/Photo1.png" />
                <h3 style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '1.5rem',
                    fontFamily: "Roboto",
                    fontSize: "2rem",
                    fontWeight: 900,
                    letterSpacing: "0.02em",
                    textAlign: "left"
                }}>Discover new things on<br /> Superapp</h3> </div>







            <div className="col-two">
                <h1 style={styleh1}>Super app</h1>
                <h2 style={styleh2}>Create an account</h2>


                <form style={{ display: "flex", flexDirection: "column", gap: "5px" }
                } onSubmit={handleSubmit}  >
                    <input style={{
                        backgroundColor: "#292929",
                        width: "40vw",
                        height: "3em",
                        top: "312px",
                        left: "1047px",
                        gap: "0px",
                        borderRadius: "6px",
                        opacity: "0px",
                        border: "none",
                        marginLeft: "4rem",
                        paddingLeft: '1rem'
                        

                    }} className="input-field" type="text" name="name" placeholder="Name" checked={data.name}  onChange={handleChange} />
                    
                    
                    <span style={{color:'red',marginLeft: "4rem",fontFamily: "DM Sans"}}>{errors.name}</span>
                    
                    
                    <input style={{
                        backgroundColor: "#292929",
                        width: "40vw",
                        height: "3em",
                        top: "312px",
                        left: "1047px",
                        gap: "0px",
                        borderRadius: "6px",
                        opacity: "0px",
                        border: "none",
                        marginLeft: "4rem",
                        paddingLeft: '1rem'

                    }} className="input-field" type="text" name="userName" placeholder="UserName" value={data.username} onChange={handleChange} />
                    
                    <span style={{color:'red',marginLeft: "4rem",fontFamily: "DM Sans"}}>{errors.username}</span>
                    
                    
                    
                    
                    
                    <input style={{
                        backgroundColor: "#292929",
                        width: "40vw",
                        height: "3em",
                        top: "312px",
                        left: "1047px",
                        gap: "0px",
                        borderRadius: "6px",
                        opacity: "0px",
                        border: "none",
                        marginLeft: "4rem",
                        paddingLeft: '1rem'

                    }} className="input-field" type="text" name="email" placeholder="email" value={data.email} onChange={handleChange} />
                    
                    
                    <span style={{color:'red',marginLeft: "4rem",fontFamily: "DM Sans"}}>{errors.email}</span>
                    
                    
                    
                    
                    <input style={{
                        backgroundColor: "#292929",
                        width: "40vw",
                        height: "3em",
                        top: "312px",
                        left: "1047px",
                        gap: "0px",
                        borderRadius: "6px",
                        opacity: "0px",
                        border: "none",
                        marginLeft: "4rem",
                        paddingLeft: '1rem',
                        marginBottom: '0.5rem'

                    }} className="input-field" type="text" name="mobile" placeholder="Mobile" value={data.mobile} onChange={handleChange}/>
                    
                    
                    <span style={{color:'red',marginLeft: "4rem",fontFamily: "DM Sans"}}>{errors.mobile}</span>
                    
                    <div style={{
                        marginLeft: "4rem", 
                        marginTop:'0.3rem',
                        fontFamily: "DM Sans",
                        fontSize: "1rem",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                        textAlign: "left",
                        color: "#7C7C7C"
                    }}>
                        <input type="checkbox" id="checkbox" name="checkbox" checked={data.checkbox}  onChange={handleChange} />
                        <label htmlFor="checkbox" >Share my registration data with Superapp</label>
                        
                    
                    </div>

                    <span style={{color:'red',marginLeft: "4rem",fontFamily: "DM Sans"}}>{errors.checkbox}</span>


                    <button
                        style={{

                            fontFamily: 'Roboto',
                            fontSize: '1REM',
                            fontWeight: 600,
                            // lineHeight: '31.52px',
                            letterSpacing: '0.02em',
                            padding: '0.7rem',
                            backgroundColor: '#72DB73',
                            color: "white",
                            borderRadius: '55px',
                            width: '37vw',
                            marginLeft: "4rem",
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            border: "none"


                        }}
                        type="submit">SIGN UP</button>
                </form>
                <div style={{
                    fontFamily: "Roboto",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    lineHeight: "25.51px",
                    letterSpacing: "0.02em",
                    textAlign: "left"
                }} id='tc'>By clicking on Sign up. you agree to Superapp <span style={{ color: "#72DB73" }}>Terms and Conditions of Use</span><br />To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{ color: '#72DB73' }}>Privacy Policy</span></div>

            </div>
        </div >








    </div >



    )
}

export default Home;