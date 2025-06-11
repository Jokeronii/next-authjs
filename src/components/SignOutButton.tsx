'use client';

import { Logout } from '@/lib/actions/auth';
import { Button } from './ui/button';

export default function () {
  return (
    <>
      <Button onClick={() => Logout()}>Sign Out</Button>
    </>
  );
}
