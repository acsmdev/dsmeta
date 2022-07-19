import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {

    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="LogoDSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.linkedin.com/in/augusto-c%C3%A9sar-soares-de-matos-98637861">@AugustoMatos</a>
                    </p>
            </div>
        </header>

    )
}

export default Header