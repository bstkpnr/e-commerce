import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Card({item}) {
  return (
    <Box borderRadius="5px" borderWidth="1px" overflow="hidden" p="3">
      <Link to={`/products/${item._id}`}>
      
        <Image
          src={item.image}
          alt="products" loading="lazy"
        />
        <Box p="6">
            <Box d="flex" alignItems="baseline">
                {moment(item.createdAt).format("DD/MM/YYYY")}
            </Box>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
             {item.title}

            </Box>
            <Box>{item.price}$</Box>

        </Box>
      </Link>
      <Button colorScheme="cyan">Add to Basket</Button>
    </Box>
  );
}
