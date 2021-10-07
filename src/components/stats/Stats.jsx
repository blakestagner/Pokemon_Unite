import Card from "../card/Card"
import CardBody from "../card/CardBody"

export default function Stats({p}) {

    return (
        <div>
            <Card
                p={p}
                title="Stats">
                <CardBody>
                    <p>HI</p>
                </CardBody>
            </Card>
        </div>
    )
}