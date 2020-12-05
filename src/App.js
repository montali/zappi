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
        <AwesomeButton type="primary">Download my CV</AwesomeButton>
        <AwesomeButton type="secondary" href="mailto:test@test.com">Send me an email</AwesomeButton>
                        </div>

                <div className="buttons-div">

        <AwesomeButtonSocial
        type="instagram"
        url="https://instagram.com/loleeeens"
      >
        Follow me
      </AwesomeButtonSocial>
      <AwesomeButtonSocial
        type="whatsapp"
        phone="393917707761"
      >
        Text me
      </AwesomeButtonSocial>
        </div>
        </div>
      </div>
    </div>

  );
}

export default App;
