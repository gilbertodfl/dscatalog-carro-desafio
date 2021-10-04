import './styles.css';

const ButtonSearch = () => {
  return (
    <div  className="catalog-search">
  
      <input id="busca" type="text"  placeholder="Digite sua busca aqui              " />
      <button className="btn btn-primary " id="btnbusca" >
        <h5>BUSCAR</h5>
      </button>
      
    </div>
  );
};

export default ButtonSearch;
