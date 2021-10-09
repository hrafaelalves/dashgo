import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps{
  showProfileData: boolean; 
}

export function Profile({ showProfileData = true }: ProfileProps){
  return(
    <Flex align="center">
     { showProfileData && <Box mr="4" textAlign="right">
        <Text>Hugo Rafael</Text>
        <Text>hugo.rafael.alves@gmail.com</Text>
      </Box> }

      <Avatar size="md" name="Hugo Rafael" src="https://github.com/hrafaelalves.png"/>
    </Flex>
  )
}