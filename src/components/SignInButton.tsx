'use client';

import { Login } from '@/lib/actions/auth';
import { Button } from './ui/button';

export default function () {
  return (
    <>
      <Button onClick={() => Login()}>Sign In with Google</Button>
    </>
  );
}
