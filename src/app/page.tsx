import SignInButton from '@/components/SignInButton';
import { auth } from '@/auth';
import SignOutButton from '@/components/SignOutButton';
import Image from 'next/image';

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <main className="w-screen h-dvh grid grid-rows-2 place-items-center">
        <h1>Please sign in</h1>
        <SignInButton />
      </main>
    );
  }

  return (
    <main>
      <p>username: {session.user?.name}</p>
      <p>username: {session.user?.email}</p>
      <Image src={session.user?.image || ''} alt={session.user?.name || ''} width={100} height={100} />
      <SignOutButton />
    </main>
  );
}
