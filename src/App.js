import NameAndSubtitle from './NameAndSubtitle.js'
import {
  AwesomeButton,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-eric.css';
import './App.css';


function App() {
  return (
    <div className="main">
      <div className="image-background"></div>

      <div className="App">
        <div className="title-div">
        <NameAndSubtitle></NameAndSubtitle>
        </div>
        <div className="all-buttons-div">
        <div className="buttons-div">
        <AwesomeButton type="primary">Scarica il mio CV</AwesomeButton>
        <AwesomeButton type="secondary" href="mailto:test@test.com">Inviami un'email</AwesomeButton>
                        </div>

                <div className="buttons-div">

        <AwesomeButtonSocial
        type="instagram"
        url="https://www.instagram.com/zappiiiiii/"
      >
        Seguimi
      </AwesomeButtonSocial>
      <AwesomeButtonSocial
        type="whatsapp"
        phone="393469660952"
      >
        WhatsApp
      </AwesomeButtonSocial>
        </div>
        </div>
      </div>
    </div>

  );
}

export default App;
