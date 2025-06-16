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
    <main className="grid grid-cols-3">
      <div>
        <h1>main content</h1>
      </div>
    </main>
  );
}
