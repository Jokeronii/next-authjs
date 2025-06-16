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
    <main className="grid grid-cols-3">
      <div>
        <h1>main content</h1>
        <ul>
          <li>{session.user.name}</li>
          <li>{session.user.email}</li>
        </ul>
        <SignOutButton />
      </div>
    </main>
  );
}
