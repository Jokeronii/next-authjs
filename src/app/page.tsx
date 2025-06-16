import { auth } from '@/auth';
import SignInButton from '@/components/SignInButton';
import SignOutButton from '@/components/SignOutButton';

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="w-screen h-dvh grid grid-rows-2 place-items-center">
        <SignInButton />
      </main>
    );
  }

  return (
    <main>
      <p>username: {session.user?.name}</p>
      <p>username: {session.user?.email}</p>
      <SignOutButton />
    </main>
  );
}
