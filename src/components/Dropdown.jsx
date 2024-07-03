import arrow from '../datas/assets/dropArrow.svg'
import handleClick from '../Utils/DropdownEvent'

import '../style/Bases/Dropdown.css'

const Dropdown = ({table}) => {
    return (
        table.map((object, index) => (
            <li
                key={index}
                onClick={(e) => handleClick(e)}
            >
                <div>
                    {object.key}
                    <img src={arrow} alt="dropdown-arrow-icon" />
                </div>
                {Array.isArray(object.value) ? (
                    <p>
                        {object.value.map((item, subIndex) => (
                            <li key={subIndex}>{item}</li>
                        ))}
                    </p>
                ) : (
                    <p>{object.value}</p>
                )}
            </li>
        ))
    )
  
}

export default Dropdown