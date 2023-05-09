import styles from './Header.module.css';
import {FcGoogle} from 'react-icons/fc'
export default function Header(){

    const navOptions=[
        'Home',
        'About Us',
        'Register',
        'Login',
        'Courses',
        'Placements',
        'Contacts'
    ]

    return(

        <header className={styles.header}>

            <div className={styles.navOptions}>
                {
                    navOptions.map(page => (
                        <p>{page}</p>
                    ))
                }
            </div>
            <FcGoogle
               
               className={styles.menu}
               onClick={()=> alert(1234)}
            
            />
        </header>
    )
}