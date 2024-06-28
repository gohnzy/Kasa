import '../style/Bases/Footer.css'
import logo from '../datas/assets/Logo_white.svg'

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt='White Kasa logo' style={{color: 'white'}}></img>
            <p id='copyrights'>&copy; Kasa. All rights reserverd</p>
        </footer>
    )
}