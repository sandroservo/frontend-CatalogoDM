import { WhatsappLogo } from "@phosphor-icons/react"
import Logo from "../../assets/logo.png"
import './styles.css'
export function Header(){
    return(
        <>
        <header>
            <img src={Logo} alt="Logo do Dona Menina" />
            <WhatsappLogo size={32} weight="fill" /> <span>Contato(99) 99121-6206</span>
        </header>
         
        </>
    )
}