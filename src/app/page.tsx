import { auth } from '@/lib/auth';

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <main>
        <h1>Not signed in</h1>
        <p>please sign in</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{JSON.stringify(session)}</h1>
    </main>
  );
}
