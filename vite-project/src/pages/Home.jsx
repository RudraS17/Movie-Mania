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
        textAlign:'center',
        marginTop:'20px'

    }

    const styleh2 =
    {
        fonFamily: 'DM Sans',
        fontSize: '25px',
        fontWeight: 400,
        // lineHeight: '34.92px',
        textAlign: 'center',
        marginBottom:'0px'
    }
    // width:"100vw",height:'100vh' Discover new things on Superapp
    return (<div>

        <div className="container-column">
            <div className="col-one" > <img style={{ width: '40vw', height: '99vh', maxHeight:'99%' }} src="../src/assets/photo1.png" /> </div>







            <div className="col-two">
                <h1 style={styleh1}>Super app</h1>
                <h2 >Create an account</h2>


                <form>
                    <input style={{
                        backgroundColor: "#292929",
                        width: "40vw",
                        height: "3em",
                        top: "312px",
                        left: "1047px",
                        gap: "0px",
                        borderRadius: "3.82px 0px 0px 0px",
                        opacity: "0px",
                        border: "none",
                        marginLeft:"4rem"

                    }} className="input-field" type="text" placeholder="Name" />
                    <input style={{
                        backgroundColor: "#292929",
                        width: "40vw",
                        height: "3em",
                        top: "312px",
                        left: "1047px",
                        gap: "0px",
                        borderRadius: "3.82px 0px 0px 0px",
                        opacity: "0px",
                        border: "none",
                        marginLeft:"4rem"
                    }} className="input-field" type="text" placeholder="UserName" />
                    <input style={{
                        backgroundColor: "#292929",
                        width: "40vw",
                        height: "3em",
                        top: "312px",
                        left: "1047px",
                        gap: "0px",
                        borderRadius: "3.82px 0px 0px 0px",
                        opacity: "0px",
                        border: "none",
                        marginLeft:"4rem"
                    }} className="input-field" type="text" placeholder="email" />
                    <input style={{
                        backgroundColor: "#292929",
                        width: "40vw",
                        height: "3em",
                        top: "312px",
                        left: "1047px",
                        gap: "0px",
                        borderRadius: "3.82px 0px 0px 0px",
                        opacity: "0px",
                        border: "none",
                        marginLeft:"4rem"
                    }} className="input-field" type="text" placeholder="Mobile" />
                    <div style={{marginLeft:"4rem"}}>
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" >Share my registration data with Superapp</label>
                        
            </div>
            <button
                         style={{ 
                        
                        fontSize: '1REM',
                        fontWeight: 600,
                        // lineHeight: '31.52px',
                        letterSpacing: '0.02em',
                        padding:'0.7rem',
                        backgroundColor:'#72DB73',
                        color:"white",
                        borderRadius:'55px',
                        width:'37vw',
                        marginLeft:"4rem",
                        marginTop:'1rem',
                        marginBottom:'1rem',


                        }} 
                        type="submit">SIGN UP</button>
        </form>
        <div id='tc'>By clicking on Sign up. you agree to Superapp <span style={{ color: "#72DB73" }}>Terms and Conditions of Use</span><br />To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span style={{ color: '#72DB73' }}>Privacy Policy</span></div>

    </div>
        </div >








    </div >



    )
}

export default Home;