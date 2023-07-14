import React from "react";

const Select = (arr) => {

    return (
        <select name="" id="">
            {Object.entries(arr).map( item => <option value={item}>{item}</option>)}
        </select>
    );
}

export default Select;