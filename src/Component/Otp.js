import React, {useState} from 'react'

function Otp(){

    const [mobileNum, setMobileNum] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleMobileNumChange = (event) => {

        setMobileNum(event.target.value);
    };

    const handleGenerateOtp = async () =>{

        if(mobileNum.length!==10){
            setErrorMsg("Please, enter a valid 10 digit mobile number.");
            return;
        
        }

        const requestOptions={

            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({mobile:mobileNum}),
        };

        try{

            const response = await fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',requestOptions);

            if(!response.ok){
                throw new Error('Failed to generate OTP');
            }
            setMobileNum('');
        }catch(error){
            setErrorMsg(error.message);
        }
    };

    return(

        <div>

            <h1>OTP Generate</h1>
            <input 

               type='tel'
               value={mobileNum}
               onChange={handleMobileNumChange}

            />

            <button onClick={handleGenerateOtp}>Generate OTP</button>
            {errorMsg && <p>{errorMsg}</p>}
        </div>
    );

}

export default Otp;