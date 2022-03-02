import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function Watch() {
    const query = useQuery()
    const search = query.get("search")
    useEffect(()=>{
        console.log(query.get("search"))
        
    })
    return(
        <div className="page">
            <iframe width="700" height="385" src={`https://www.youtube.com/embed/${search}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}
