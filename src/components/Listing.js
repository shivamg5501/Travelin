import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./listing.css";
import Header from './Header';
import { Router } from 'react-router-dom'
import MyCarousel from "./Carousel";
import MyFunction from "./Map";

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '10px', background: '#f5f5f5' }}>
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
};


const Listing = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const listingsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = () => {
      axios.get(`https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${currentPage}&limit=${listingsPerPage}`)
        .then(response => {
          setListings(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    };

    fetchListings();
  }, [currentPage]);

  return (
    <div  className='title2'>
      <Header />
      <MyCarousel />
      {/* <MyFunction /> */}
      <div className='card-container'>
      {listings.map(listing => (
        <div key={listing.id} className='card'>
          <h2 className='title1'>{listing.name}</h2>
          <p>{listing.description}</p>
          <img src={listing.imageURL} alt={listing.name} className='imglist'/>
          <button onClick={() => navigate(`/listing/${listing.id}`)}>View Details</button>
        </div>
      ))}
      </div>
      <Footer />
    </div>
  );
};

export default Listing;
