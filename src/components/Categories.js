import React from 'react' ;

function Categories({ filter, categories} ) {
    return (
        <div className="buttons">
            {
                categories.map((cat, idx)=>{
                    return <button type="button" className="btn-port" onClick={()=> filter(cat)} key={idx}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories
