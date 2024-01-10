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
    <div>
      <h2>{listing.title}</h2>
      <p>{listing.description}</p>
      <button>Book Now</button>
    </div>
  );
};

export default DetailView;
