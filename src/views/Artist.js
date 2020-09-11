import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Loader from '../components/Loader';

function Artist() {
    const {artist_uuid} = useParams()
    const url = `https://run.mocky.io/v3/${artist_uuid}`;   
    const [artist, setArtist] = useState({
        loading: false, 
        data: null,
        error: false
    });

    let content = null;

    useEffect(() => {
        setArtist({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setArtist({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setArtist({
                    loading: false,
                    data: null,
                    error: true
            })
        })
    }, [url])

    if(artist.error) {
        content = <p>The artist page you are trying to reach does not exist.</p>
    }

    if(artist.loading) {
        content = <Loader/>
    }

    if(artist.data) {
        content = 
            <div>
                <h1 className = "text-2xl font-bold mb-3">{artist.data.data.name}</h1>
                <div>
                    <img
                        src = {artist.data.data.meta_image}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    {artist.data.data.country.name}
                </div>
                <div>
                    {artist.data.data.genre.name}
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )

}


export default Artist;