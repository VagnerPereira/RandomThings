import "./style.css"
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';


export function DropDown({func}){
    return(
        <div className="dropDownClass">
            <Dropdown
            className="dropDownClassIn"
                options={['1', '2', '3', '4']}
                value="2"
                onChange={(value) => {
                        func(value);
                }}
            />
        </div>
    )
}