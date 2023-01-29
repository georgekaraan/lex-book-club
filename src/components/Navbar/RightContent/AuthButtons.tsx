import { authModalState } from '@/atoms/authModalAtom';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant={'light'}
        onClick={() => setAuthModalState({ open: true, view: 'login' })}
      >
        Log In
      </Button>
      <Button onClick={() => setAuthModalState({ open: true, view: 'signup' })}>
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
