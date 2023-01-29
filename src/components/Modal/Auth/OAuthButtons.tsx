import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction={'column'} mb={4} w="100%">
      <Button height="34px" border="1px solid" borderColor="gray.400" mb={2}>
        <Image mr={1} src="/images/google_logo.png" height={'20px'} />
        Continue with Google
      </Button>
      <Button height="34px" border="1px solid" borderColor="gray.400" mb={2}>
        <Image mr={1} src="/images/github_logo.png" height={'20px'} />
        Continue with GitHub
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
