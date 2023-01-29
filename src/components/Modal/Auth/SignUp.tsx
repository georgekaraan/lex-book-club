import { authModalState } from '@/atoms/authModalAtom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          name="email"
          placeholder="email"
          type={'email'}
          mb={2}
          onChange={onChange}
          fontSize="10pt"
          required
          _placeholder={{ color: 'gray.500' }}
          _hover={{
            bg: 'gray.50',
            border: '1px solid',
            borderColor: 'gray.200'
          }}
          _focus={{
            outline: 'none',
            bg: 'gray.50',
            border: '1px solid',
            borderColor: 'gray.200'
          }}
        />
        <Input
          name="password"
          mb={2}
          placeholder="password"
          type="password"
          onChange={onChange}
          fontSize="10pt"
          required
          _placeholder={{ color: 'gray.500' }}
          _hover={{
            bg: 'gray.50',
            border: '1px solid',
            borderColor: 'gray.200'
          }}
          _focus={{
            outline: 'none',
            bg: 'gray.50',
            border: '1px solid',
            borderColor: 'gray.200'
          }}
        />
        <Input
          name="confirmPassword"
          placeholder="confirm password"
          type="password"
          onChange={onChange}
          fontSize="10pt"
          required
          _placeholder={{ color: 'gray.500' }}
          _hover={{
            bg: 'gray.50',
            border: '1px solid',
            borderColor: 'gray.200'
          }}
          _focus={{
            outline: 'none',
            bg: 'gray.50',
            border: '1px solid',
            borderColor: 'gray.200'
          }}
        />
        <Button w="100%" height="36px" variant={'light'} my={2} type="submit">
          Sign Up
        </Button>
        <Flex fontSize={'9pt'} justifyContent="center">
          <Text mr={1}>Already a friend?</Text>
          <Text
            color={'blue.500'}
            fontWeight="700"
            cursor={'pointer'}
            onClick={() =>
              setAuthModalState((prev) => ({ ...prev, view: 'login' }))
            }
          >
            SIGN IN
          </Text>
        </Flex>
      </form>
    </>
  );
};
export default SignUp;
