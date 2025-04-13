import '../Contact.css';
import { useEffect, useState } from "react";
import useHeroId from "../hooks/useHero.ts";
import { base_url, period_month } from "../utils/constants";
import { Planet } from "../utils/types";
import ErrorPage from "./ErrorPage";

const Contact = () => {
    const [planets, setPlanets] = useState<string[]>(['Loading...']);
    const {isValidHero } = useHeroId();

    useEffect(() => {
        const cached = localStorage.getItem('planets');
        if (cached) {
            const parsed = JSON.parse(cached);
            if (Date.now() - parsed.timestamp < period_month) {
                setPlanets(parsed.payload);
                return;
            }
        }

        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then((data: Planet[]) => {
                const names = data.map(item => item.name);
                setPlanets(names);
                localStorage.setItem('planets', JSON.stringify({
                    payload: names,
                    timestamp: Date.now()
                }));
            });
    }, []);

    if (!isValidHero) return <ErrorPage />;

    return (
        <form className="containerContact" onSubmit={e => e.preventDefault()}>
            <label>First Name
                <input type="text" name="firstname" placeholder="Your name.." />
            </label>

            <label>Last Name
                <input type="text" name="lastname" placeholder="Your last name.." />
            </label>

            <label>Planet
                <select name="planet">
                    {planets.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
            </label>

            <label>Subject
                <textarea name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;

