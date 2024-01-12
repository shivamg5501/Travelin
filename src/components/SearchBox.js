import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const [accommodations, setAccommodations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=2&limit=10"
    )
      .then((response) => response.json())
      .then((data) => setAccommodations(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    const filtered = accommodations.filter(
      (accommodation) =>
        accommodation.name.toLowerCase().includes(keyword.toLowerCase()) ||
        accommodation.description.toLowerCase().includes(keyword.toLowerCase())
    );
    return filtered;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/listing/${keyword}`, {
        state: { filteredAccommodations: handleSearch() },
      });
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <div className="flex items-center">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Places..."
          className="mr-2 ml-5"
        ></Form.Control>
        <Button type="submit" variant="outline-success" className="p-2">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchBox;
