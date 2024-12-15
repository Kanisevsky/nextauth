import { LoginButton } from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400  to-blue-800">
      <div className="space-y-4 text-center">
        <h1
          className={`${poppins.className} text-6xl font-semibold text-white drop-shadow-md`}
        >
          🔒Auth
        </h1>
        <p className="text-white text-lg">
          This is a simple authentication app.
        </p>
      </div>
      <div className="">
        <LoginButton mode="modal">
          <Button
            variant="secondary"
            className="text-md font-semibold"
            size="lg"
          >
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
