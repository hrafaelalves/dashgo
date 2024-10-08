import { Stack, Button, Box } from '@chakra-ui/react';
import { PaginationItem } from './PaginationItem';

export function Pagination(){
  return(
    <Stack
      direction={["column", "row"]}
      mt={8}
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      
      <Stack spacing="2" direction="row">
        <PaginationItem number={1} isCurrent={true}/>
        <PaginationItem number={2}/>
        <PaginationItem number={3}/>
        <PaginationItem number={4}/>
        <PaginationItem number={5}/>
      </Stack>
    </Stack>
  );
}