import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropDown";

const SearchParams = () => {
  const [location, setLocation] = useState("Dhaka");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStr = breeds.map(({ name }) => name);
      setBreeds(breedStr);
    }, console.error);
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <h2> {location} </h2>{" "}
      <form>
        <label htmlFor="location">
          location{" "}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />{" "}
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button> Submit </button>{" "}
      </form>{" "}
    </div>
  );
};

export default SearchParams;
