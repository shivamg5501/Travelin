import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/listing.css";
import Header from "./Header";
import MyFunction from "./Map";

const Footer = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: "10px", background: "#c8b9a5" }}
    >
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  );
};

const Listing = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = () => {
      axios
        .get(
          `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${currentPage}&limit=${listingsPerPage}`
        )
        .then((response) => {
          setListings(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };

    fetchListings();
  }, [currentPage]);

  return (
    <div className="title2">
      <Header />
      <div className="flex justify-between">
        <MyFunction className="w-1/2" />
        <div className="card-container flex justify-between w-1/2">
          {listings.map((listing) => (
            <div key={listing.id} className="card2 flex justify-between">
              <h2 className="title1">{listing.name}</h2>
              <p>{listing.description}</p>
              <img
                src={listing.imageURL}
                alt={listing.name}
                className="imglist"
              />
              <h5>₹{Math.trunc(listing.price)}</h5>

              <button
                className="border border-2 border-black rounded-md px-4"
                onClick={() => navigate(`/listing/${listing.id}`)}
              >
                View Details
              </button>
            </div>
          ))}
          <button
            className="flex items-center justify-center w-1/2 mt-5 mb-3 border border-gray-800 text-black bg-dd hover:bg-nn rounded py-2 px-4 "
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
          {currentPage > 1 && (
            <button
              className="flex items-center justify-center w-1/2 mt-5 mb-3 border border-gray-800 text-black bg-dd hover:bg-nn rounded py-2 px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Listing;
