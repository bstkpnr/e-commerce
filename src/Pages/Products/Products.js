import React from "react";
import { Grid } from "@chakra-ui/react";

import Card from "../../components/Card/Card";
export default function Products() {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Card />
      <Card />
      <Card />
      <Card />

      </Grid>
      
    </div>
  );
}
