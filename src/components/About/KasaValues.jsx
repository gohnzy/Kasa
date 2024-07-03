import valuesDetails from '../../datas/values.json';
import '../../style/Pages/About/KasaValues.css';
import Dropdown from '../Dropdown';

const Values = () => {

    return (
        <section id='values'>
            <ul>
                <Dropdown table={valuesDetails}/>
            </ul>
        </section>
    );
};

export default Values;
