import './Login.css'
export default function Login(){

    function handleLog(){

            alert('Login')
    }

    return(

        
        <div className='log'>
    

            <button onClick={handleLog}>Login</button>
        </div>
    )
}