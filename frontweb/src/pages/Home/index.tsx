import './styles.css';

// comand abaixo faz com que a imagem possa ser usado como um componente, veja a linha 17.

import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
// forma tradicional: function Home() {
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card-main">
          <div className="home-image-container svg">
            <MainImage />
          </div>
          <div className="home-card-main">
            <h1> O carro perfeito para você</h1>
          </div>
          <div className="home-card-main">
            <h2>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </h2>
          </div>
          <div></div>
        </div>
        <div className="home-card2">
          <Link to="/products">
            <ButtonIcon />
          </Link>
          <p> Comece a navegar agora</p>

        </div>
      </div>
    </>
  );
};

export default Home;

