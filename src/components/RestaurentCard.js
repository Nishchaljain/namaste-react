import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    restData?.info;
  const { deliveryTime } = restData?.info.sla;
  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        alt="rest-card"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurentCard;
