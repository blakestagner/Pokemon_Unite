import { useEffect } from "react"
import './css/moves.css';
import CardHeader from "./card/CardHeader";
import Card from "./card/Card";
import CardBody from "./card/CardBody";
import BattleIcon from './icon/BattleIcon';

export default function Moves({p}) {
    const imgDir = `${process.env.PUBLIC_URL}/data/`;


    var moveSlots = [
        { "Move 1": p.moves.slot1 }, 
        { "Move 2" : p.moves.slot2} 
    ];

    return (
        <div>
            <BasicCard 
                title={"Basic Moves"}
                p={p}
                moves={p.moves}/>
                {console.log(moveSlots)}
            <div className="move-grid">
            {moveSlots.map((moves, i) => (
                <Card 
                    key={i}
                    p={p}>
                <CardHeader
                    p={p}
                    title={`${Object.keys(moves)}`}>
                    <BattleIcon />
                </CardHeader>
                <CardBody>
                    <div className="move-group">
                    {moves[Object.keys(moves)].map(m => (
                        <div
                            key={m.moveId}>
                        <MoveRow 
                            p={p}
                            title={m.moveId}
                            url={`${imgDir}${p.pokemonId}/moves/${m.moveId}.png`}
                            cooldown={m.cooldown}
                            level={m.level}/>
                            <div 
                                className="flex-row">
                                <div
                                    className={`basic-info ${p.role}`}>
                                    <p>
                                        <span>Style: </span>
                                        {m.style}
                                    </p>
                                </div>
                                <div 
                                    className={`basic-info ${m.category}`}>
                                    <p>
                                        <span>Category: </span>
                                        {m.category}
                                    </p>
                                </div>
                            </div>
                            <p className="move-details">{m.details}</p>
                            {m.upgrade ?
                                <div className="move-upgrade">
                                    <p
                                        className="move-upgrade-header">
                                        <span>Upgrade: </span> 
                                        {m.upgrade}
                                    </p>
                                    <p>{m.upgrade_details}</p>
                                </div>
                                : null 
                            }
                        </div>
                    ))}
                    </div>
                </CardBody>
            </Card>
            ))}
            </div>
        </div>
    )
}


function BasicCard({title, moves, p}) {
    const imgDir = `${process.env.PUBLIC_URL}/data/`;
    return (
        <div className="detail-card">
            <CardHeader 
                p={p}
                title={title}>
                <BattleIcon />
            </CardHeader>
            <div className="basic-card-body">
                <div className="move-card-body">
                    <div className="move-group">
                        <p className="move-type">Basic</p>
                        <MoveRow 
                            p={p}
                            title={moves.basic.moveId}
                            url={`${imgDir}/standard.png`}/>
                        <p><span>Style: </span>{moves.basic.style}</p>
                        <p><span>Boost Count: </span>{moves.basic.boostCount}</p>
                        <p><span>Boost Style: </span>{moves.basic.boostStyle}</p>
                    </div>
                </div>
                <div className="move-card-body">
                    <div className="move-group">
                        <p className="move-type">Unite</p>
                        <MoveRow 
                            p={p}
                            title={moves.unite.moveId}
                            url={`${imgDir}${p.pokemonId}/moves/unite.png`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MoveRow({ title, url, cooldown, level}) {
    const upperCase = (word) => {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        if(word.includes("_")) {
          var splitWord = word.split("_")
          splitWord[1] = splitWord[1].charAt(0).toUpperCase() + splitWord[1].slice(1)
          word = splitWord.join().replaceAll(",", " ")
        } return word
      }
    return (
            <div 
                className="icon-name-row">
                <div
                    className="icon-row-1">
                    <img
                        className="move-icon" 
                        src={url}
                        alt='hello'/>
                    <span>{upperCase(title)}</span>
                </div>
                { ( cooldown && level ) ? 
                    <div
                        className="icon-row-2">
                        <p>
                        <span>Cooldown: </span>
                        {cooldown}s
                        </p>
                        <p>
                            <span>Level: </span>
                            {level}
                        </p>
                    </div> : null 
                }
            </div>
    )
}