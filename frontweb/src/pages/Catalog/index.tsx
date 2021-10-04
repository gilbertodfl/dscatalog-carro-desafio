import ProductCard from 'components/ProductCard';
// import { Link } from 'react-router-dom';
import ButtonSearch from 'components/ButtonSearch';
//import './styles.css';

// comand abaixo faz com que a imagem possa ser usado como um componente, veja a linha 17.

const Catalog = () => {
  return (
    <>
      <div>
        <ButtonSearch />
      </div>
      <div className="container md-y4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
