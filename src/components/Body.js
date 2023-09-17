import RestaurentCard from "./RestaurentCard";
import restaurentList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurents, setListOfRestaurents] = useState(restaurentList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurents = ListOfRestaurents.filter(
              (restaurent) => restaurent.info.avgRating > 4
            );
            setListOfRestaurents(filteredRestaurents);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} restData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
