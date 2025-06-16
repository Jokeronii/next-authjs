'use client';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import SignInButton from './SignInButton';

export function SignInForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Only Google registered users can login to their account</CardDescription>
      </CardHeader>

      <CardFooter className="flex-col gap-2">
        <SignInButton />
      </CardFooter>
    </Card>
  );
}
