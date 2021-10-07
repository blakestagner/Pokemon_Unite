import CardHeader from "./CardHeader";
import './card.css';

export default function Card({children}) {

    return (

        <div className="detail-card">
            {children}
        </div>
    )
}