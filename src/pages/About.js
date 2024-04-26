import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        At our Nepali restaurant, we invite you on a culinary journey through the rich and diverse flavors of Nepal. 
        Nestled amidst vibrant decor reminiscent of the Himalayan landscapes, our restaurant offers a warm and welcoming
         ambiance for diners to indulge in authentic Nepali cuisine. From comforting dal bhat to tantalizing momos, e
         ach dish is crafted with care and expertise, using traditional recipes passed down through generations. 
         Our menu showcases a delightful array of flavors, from spicy curries to aromatic rice dishes, catering 
         to every palate. Every bite tells a story of Nepali heritage and culture, inviting you to savor the essence of 
         the Himalayas. Whether you're craving a hearty meal or seeking new culinary adventures, our restaurant promises a 
         memorable dining experience that transports you to the heart of Nepal. Join us as we celebrate the vibrant culinary 
         tapestry of Nepal, where every meal is a celebration of flavors, traditions, and hospitality. Welcome to a taste of 
         Nepal, right here at our restaurant.
        </p>
        <br />
      </Box>
    </Layout>
  );
};

export default About;
