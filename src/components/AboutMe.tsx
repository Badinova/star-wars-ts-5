import { useEffect, useState } from "react";
import useHeroId from "../hooks/useHero.ts";
import { characters, period_month } from "../utils/constants";
import { HeroInfo } from "../utils/types";
import ErrorPage from "./ErrorPage";

const AboutMe = () => {
    const { heroId, isValidHero } = useHeroId();
    const [hero, setHero] = useState<HeroInfo>();

    useEffect(() => {
        if (!isValidHero) return;

        const saved = localStorage.getItem(heroId);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Date.now() - parsed.timestamp < period_month) {
                setHero(parsed.payload);
                return;
            }
        }

        fetch(characters[heroId].url)
            .then(res => res.json())
            .then(data => {
                const info: HeroInfo = {
                    name: data.name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color
                };
                setHero(info);
                localStorage.setItem(heroId, JSON.stringify({
                    payload: info,
                    timestamp: Date.now()
                }));
            });
    }, [heroId, isValidHero]);

    if (!isValidHero) return <ErrorPage />;

    return (
        <>
            {hero && (
                <div className='fs-2 lh-lg text-justify ms-5'>
                    {Object.keys(hero).map(key => (
                        <p key={key}>
                            <span className="display-3">{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
};

export default AboutMe;
