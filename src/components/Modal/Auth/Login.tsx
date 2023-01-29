import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const onSubmit = () => {};
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
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
        <Button w="100%" height="36px" variant={'light'} my={2} type="submit">
          Login
        </Button>
        <Flex fontSize={'9pt'} justifyContent="center">
          <Text mr={1}>New here?</Text>
          <Text
            color={'blue.500'}
            fontWeight="700"
            cursor={'pointer'}
            onClick={() =>
              setAuthModalState((prev) => ({ ...prev, view: 'signup' }))
            }
          >
            SIGN UP
          </Text>
        </Flex>
      </form>
    </>
  );
};
export default Login;
