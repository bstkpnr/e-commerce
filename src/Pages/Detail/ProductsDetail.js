import React from 'react'
import {useParams} from 'react-router-dom'
import { useQuery } from 'react-query'
import {fetchProduct } from '../../api';
import { Box,Text,Button } from '@chakra-ui/react';
import moment from 'moment';
export default function ProductsDetail() {
    const {isLoading, isError, data}=useQuery('products',fetchProduct);

    if(isLoading){
       return <div>Loading...</div>
    }
    if(isError){
      return  <div>ERROR</div>
    }
   
    return (
        <div>
            {/* redux veya context */}
            <Button colorScheme="pink" variant="solid">
                Add to basket
            </Button>
            <Text as="h2" fontSize="2x1">{data.title}</Text>
            <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
            <p>{data.description}</p>
        </div>
    )
}
