import Halftone from "../icon/Halftone"
import AttackIcon from "../icon/AttackIcon";
import './card.css';

export default function CardHeader({p, title, children}) {

    return (
        <div className={`move-card-header ${p.role}-header`}>
            <Halftone 
                styles="card"
                color={p.role}/>
            <div className="card-header">
                {children}
                <p>{title}</p>
            </div>
        </div>
    )
}
