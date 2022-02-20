import Consultcep from "../../assets/image/Consultcep-logo.svg"
import viacep from "../../service/service-viacep-api"
import { HeaderStyle, InputTextStyle } from "./style"
import { useState } from "react"

const Header = () => {
  const [seekInput, setSeekInput] = useState<string | null>(null)

  const handleButton = () => {
    return console.log(seekInput);
  }

  return(
    <HeaderStyle>
      <header className="header">
        <img src={Consultcep} />
        <nav className="navBar">
          <ul>
            <li>QUEM SOMOS</li>
            <li>CONTATO</li>
          </ul>
          <select className="language">
            <option>PT-BR</option>
            <option>EN</option>
          </select>
        </nav>
      </header>
      <InputTextStyle>
        <div className="textHeader">
          <p>Digite o CEP ou endereço que deseja encontrar.</p>
        </div>
        <div className="inputs">
          <input type="text" className="seekInput" onChange={setSeekInput => seekInput}/>
          <input type="button" value="PROCURAR" className="searchInput" onClick={ handleButton }/>
        </div>
      </InputTextStyle>
    </HeaderStyle>
  );
}

export default Header;