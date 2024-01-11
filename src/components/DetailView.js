import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailView = () => {
  const [listing, setListing] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchListing = () => {
      axios.get(`https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings/${id}`)
        .then(response => {
          setListing(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className='dtv'>
      <h2>{listing.name}</h2>
      <p>{listing.description}</p>
      <img src={listing.imageURL} className='imglist1' />
      <div className='cst'>
        <h2 >Necessary Details</h2>
      <h4>Trip Cost : {listing.price}</h4>
      <h5>Zip code : {listing.zipcode}</h5>
      <h6>Listed By : {listing.listedBy}</h6>
      <h6>Listed Onn : {listing.listedOn}</h6>
      <h7>Location : Longitude{listing.longitude} & Latitude-{listing.latitude} </h7>
      </div>
      
      <button className='btt'>Book Now</button>
    </div>
  );
};

export default DetailView;
