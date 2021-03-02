import { useState, useEffect } from 'react';

const people = () => {
    const [people, setpeople] = setState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => setpeople(people));
    },[]);


const People = () => {
    return (
        <main className="container=">
            <section className="row mt-3">
                <div className="col-md-6">
                <ul className="list-group">
                    {people.map(user => (
                        <li key={'user-item-${people.id}'} className="list-group-item">
                    {user.username}
                    </li>
                    ))}
                </ul>
                </div>
                
            </section>
        </main>
    )
}
}
export default people;