import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FucpqaMfHvX0WjB5Mn2xbD1TexPPzQKutrOnWOVI&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restObj = {
  info: {
    id: "24463",
    name: "Domino's Pizza",
    cloudinaryImageId: "sxkkygjqz7e8mad1qnvw",
    locality: "Near Sanagam Theatre",
    areaName: "Kurla West",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 3.6,
    feeDetails: {
      restaurantId: "24463",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3600,
    },
    parentId: "2456",
    avgRatingString: "3.6",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      serviceability: "SERVICEABLE",
      slaString: "25 mins",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-17 00:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹999",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/dominos-pizza-near-sanagam-theatre-kurla-west-mumbai-24463",
    type: "WEBLINK",
  },
};

const RestaurentCard = (props) => {
  const { restData } = props;

  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        alt="rest-card"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restData.info.cloudinaryImageId
        }
      />
      <h3>{restData.info.name}</h3>
      <h4>{restData.info.cuisines.join(", ")}</h4>
      <h4>{restData.info.costForTwo}</h4>
      <h4>{restData.info.avgRating} stars</h4>
      <h4>{restData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard restData={restObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
