import valuesDetails from '../../datas/values.json';
import '../../style/Pages/About/KasaValues.css';
import arrow from '../../datas/assets/dropArrow.svg'

import handleClick from '../DropdownEvent'

const Values = () => {

    return (
        <section id='values'>
            <ul>
                {valuesDetails.map((value, index) => (
                    <li
                        key={index}
                        onClick={(e) => handleClick(e)}
                    >
                        <div>
                            {value.value}
                            <img src={arrow} alt="dropdown-arrow-icon" />
                        </div>
                        <p>{value.details}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Values;
