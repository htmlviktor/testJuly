import React from 'react';
import Navigation from "../../components/navigation/navigation";


const CategoriesPage = ({categories, onClick, activeCategory, currentList}) => {
    return (
        <>
            <Navigation />
            {
                categories.map((it) => <button onClick={() => onClick(it)}>{it}</button>)
            }

            <h2>{activeCategory}</h2>
            {
                currentList.map(it => <div>{it.name}</div>)
            }
        </>
    )
}


export default CategoriesPage;