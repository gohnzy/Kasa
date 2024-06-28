import { Link } from "react-router-dom"

import '../style/Bases/Error.css'

const Error = () => {
    return (
        <main id="ErrorPage">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error