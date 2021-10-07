import Card from "../card/Card";
import CardBody from "../card/CardBody";
import './ratings.css';
import { useEffect } from "react";
import CardHeader from "../card/CardHeader";
import AttackIcon from "../icon/AttackIcon";

export default function Ratings({p}) {
    useEffect(() => {
        console.log(p.ratings
            )
    }, [p])

    const {endurance, mobility, offense, scoring, support} = p.ratings;

    const ratings = [
        { "Endurance": endurance }, 
        { "Mobility" : mobility },
        { "Offense": offense },
        { "Scoring": scoring },
        { "support": support } 
    ];

    function Stars({score, name}) {
        return (
            <div className="star-row">
                <span>{name}</span>
                <div className="star-ratings-css" title={score}></div>
            </div>
        )
    }

    return (
        <div>
            <Card
                p={p}
                title="Ratings">
                <CardHeader 
                    p={p}
                    title="Ratings">
                    <AttackIcon />
                </CardHeader>
                <CardBody>
                    { ratings.map( r => (
                        <Stars key={Object.keys(r)} name={Object.keys(r)} score={r[Object.keys(r)]}></Stars>
                    ))}
                </CardBody>
            </Card>
        </div>
    )
}