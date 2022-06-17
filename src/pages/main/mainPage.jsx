import React from 'react';
import Navigation from "../../components/navigation/navigation";


const MainPage = ({data, categories}) => {
    return (
        <>
            <Navigation />
            <div>Main page</div>
            {categories.map((it) => {
                const filmsOfCategory = data.filter(film => film.category === it).slice(0, 2);
                return (
                    <div>
                        {it}: {filmsOfCategory.map(fc => <span>{fc.name}</span>)}
                    </div>
                )
            })}
        </>
    )
}


export default MainPage;