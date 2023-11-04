import './styles.css';
import carImage from '../../assets/car-card 1.png';

export default function CatalogCard(){
    return (
    <>
        <div className="container">
            <img src={carImage} alt="Imagem do carro" />
            <p>Lorem ipsum dolor</p>
        </div>
    </>
    );
}