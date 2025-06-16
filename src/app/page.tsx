import { auth } from '@/auth';
import { SignInForm } from '@/components/SignInForm';

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="w-screen h-dvh grid grid-rows-2 place-items-center">
        <SignInForm />
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
