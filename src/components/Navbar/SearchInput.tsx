import { CheckIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex ml={2} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="lightYellow" />}
          height="28px"
          mt={'0.5'}
        />
        <Input
          type="text"
          height="30px"
          placeholder="Search book"
          _placeholder={{ color: 'gray' }}
          //   fontSize={'10pt'}
          color={'lightyellow'}
          _focus={{ outline: 'none', border: '1px solid' }}
          _hover={{ bg: 'gray.700', border: '1px solid' }}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
