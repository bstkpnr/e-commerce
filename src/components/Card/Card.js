import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Box borderRadius="5px" borderWidth="1px" overflow="hidden" p="3">
      <Link to="#/">
        <Image
          src="https://picsum.photos/id/237/200/300 
"
          alt="products"
        />
        <Box p="6">
            <Box d="flex" alignItems="baseline">
                12/06/1998
            </Box>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                MacBookPro

            </Box>
            <Box>100 TL</Box>

        </Box>
      </Link>
      <Button colorScheme="cyan">Add to Basket</Button>
    </Box>
  );
}
