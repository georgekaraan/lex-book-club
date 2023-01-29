import { Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {
  return (
    <Flex
      bg="dark"
      height="44px"
      _dark={{ bg: 'lightYellow' }}
      padding={'6px 12px'}
      align="center"
      justifyContent={'space-between'}
    >
      <Flex alignItems={'center'} gap="0.5em" _dark={{ bg: 'lightYellow' }}>
        <Image
          src="/images/Lex-Face.png"
          height="30px"
          _dark={{ bg: 'lightYellow' }}
        />
        <Heading
          size={'md'}
          color={'lightYellow'}
          _dark={{ bg: 'lightYellow', color: 'dark' }}
          display={{ base: 'none', sm: 'unset' }}
          whiteSpace="nowrap"
        >
          Lex' Book Club
        </Heading>
      </Flex>
      {/* <Directory/> */}
      <SearchInput />
      <RightContent />
      {/* <DarkModeSwitch /> */}
    </Flex>
  );
};
export default Navbar;
