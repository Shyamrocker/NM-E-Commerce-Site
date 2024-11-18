import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Base"
          /* The `price=` attribute in the `` component is used to specify the price of the
          product being displayed. In this case, it is being used to display the price of each
          bestseller product in the BestSellers component. */
          price="35.00"
          color="Blank and White"
          badge={true}
          des="No matter the product, our collection is designed with your lifestyle in mind—whether it's a backpack, household material, or travel bag"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="Upgrade your daily adventures with our sleek and durable backpack. Designed for comfort and functionality."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Transform your living space with our premium collection of household materials, designed to enhance your everyday life. "
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Designed for the modern traveler, our travel bag combines practicality with a sleek aesthetic, ensuring that your journeys are as smooth as possible."
        />
      </div>
    </div>
  );
};

export default BestSellers;
