import CatalogCard from '../../components/CatalogCard';
import './styles.css';

export default function Catalog(){
    return (
        <>
            <section id="section-catalog">
                <h2>Venha nos visitar</h2>
                <CatalogCard/>
                <CatalogCard/>
            </section>
        </>
    );
}