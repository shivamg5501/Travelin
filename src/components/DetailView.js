import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "./Header";

const DetailView = () => {
  const [listing, setListing] = useState(null);
  const { id } = useParams(1);

  useEffect(() => {
    const fetchListing = () => {
      axios
        .get(`https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings/${id}`)
        .then((response) => {
          setListing(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };

    fetchListing();
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  function getReadableDate(isoDate) {
    let date = new Date(isoDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}-${month}-${year}`;
}

  return (
    <div className="dtv">
      <Header />
      <h2 className="heading ml-10 pt-8">{listing.name}</h2>
      <p className="ml-10">{listing.description}</p>
      <div className="card-container">
        <Card className="ml-10">
          <img src={listing.imageURL} className="imglist1" />
        </Card>

        <div className="cst">
          <Card className="card3">
            <h2> Details</h2>
            <h4>Trip Cost : ₹{Math.trunc(listing.price)}</h4>
            <h5>Zip code : {listing.zipcode}</h5>
            <h6>Listed By : {listing.listedBy}</h6>
            <h6>Listed On : {getReadableDate(listing.listedOn)}</h6>
          </Card>
        </div>
      </div>
      <button className="border border-2 border-black rounded-md px-4 py-2 mt-2 items-center justify-center flex center-button">
        Book Now
      </button>
    </div>
  );
};

export default DetailView;
