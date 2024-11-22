import React, { useEffect } from 'react'

function Filter({ Name, active, id, setactive }) {

    const Changeactive = (id) => {
        setactive(id);
        console.log(active);
    }
    return (
        <>
            <button onClick={() => Changeactive(id)} className={`${active === id ? 'active' : ''} filterButton`}>
                {Name}
            </button>
        </>

    )
}

export default Filter