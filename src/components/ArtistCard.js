import React from 'react';
import {Link} from 'react-router-dom';

function ArtistCard(props) {
    return (
        <div className="border mt-4 rounded overflow-hidden py-3">
            <Link to={`/artist/${props.artist.artist_uuid}`}>
                <div className="font-bold text-xl mb-3">
                    {props.artist.artist_name}
                </div>
            </Link>
            <Link 
                to={`/artist/${props.artist.artist_uuid}`}
                className="bg-red-500 text-white p-2 flex justify center"
                >
                View more
            </Link>
        </div>
    )
}

export default ArtistCard;