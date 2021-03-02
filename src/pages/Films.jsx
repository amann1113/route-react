import { useState, useEffect } from 'react';

const users = () => {
    const [films, setFilms] = setState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(users => setFilms(films));
    },[]);


const Films = () => {
    return (
        <main className="container=">
            <section className="row mt-3">
                <div className="col-md-6">
                <ul className="list-group">
                    {films.map(films => (
                        <li key={'user-item-${films.id}'} className="list-group-item">
                    {films.filmname}
                    </li>
                    ))}
                </ul>
                </div>
                
            </section>
        </main>
    )
}
}
export default Films;