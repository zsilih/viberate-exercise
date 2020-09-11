import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import ArtistCard from '../components/ArtistCard';

function Home() {

    const url = `https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a`;   
    const [artists, setArtists] = useState({
        loading: false, 
        data: null,
        error: false
    });

    useEffect(() => {
        setArtists({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setArtists({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setArtists({
                    loading: false,
                    data: null,
                    error: true
            })
        })
    }, [url])

    let content = null;

    if(artists.error) {
        content = <p>The artist page you are trying to reach does not exist.</p>
    }

    if(artists.loading) {
        content = <Loader/>
    }

    if(artists.data) {
        content = 
        artists.data.all_artists.map((artist, key) => 
            <div>
                <ArtistCard
                    artist={artist}
                />
            </div>
        )
    }

    return(
        <div>
            <h1 className="font-bold text-2xl">Artists</h1>
            {content}
        </div>
    )
}


export default Home;