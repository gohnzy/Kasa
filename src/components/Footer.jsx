import '../style/Bases/Footer.css'
import logo from '../datas/assets/Logo_white.svg'

export default function Footer({page}) {
    const currentPage = window.location.pathname
    console.log(currentPage);
    return (
        <footer>
            <img src={logo} alt='White Kasa logo' style={{color: 'white'}}></img>
            <p id='copyrights'>&copy; Kasa. All rights reserved</p>
        </footer>
    )
}