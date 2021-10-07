import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

export default function PageNotFound() {
    const [error, setError] = useState(null)

    const { param1, param2 } = useParams();

    useEffect(() => {
        if(param1 && param2) {
            console.log(param1,param2)
            setError({
                param1: param1,
                param2: param2
            })
        }
    }, [param1, param2])


    if(!error) return <p>Loading</p>

    return (
        <div className="not-found">
            <h1>Page Not Found</h1>
            <p>{error.param1} {error.param2} not found</p>
        </div>
    )


} 