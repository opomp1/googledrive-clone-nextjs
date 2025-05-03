import { SignInButton } from "@clerk/nextjs";
import { CloudIcon } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <div className="mb-8 flex items-center justify-center space-x-2">
        <CloudIcon className="h-12 w-12 text-white" />
        <h1 className="text-4xl font-bold text-white">T3 Drive</h1>
      </div>

      <div className="w-full max-w-md space-y-4 rounded-lg border-2 bg-neutral-900/60 p-14 text-white shadow-xl backdrop-blur-sm">
        <div className="space-y-1">
          <div className="text-center text-2xl font-bold">Welcome Back</div>
          <div className="text-center text-neutral-400">
            Your secure cloud storage solution
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div className="relative mx-auto h-[160px] w-full max-w-[280px]">
            <div className="absolute left-0 top-0 h-28 w-20 -rotate-6 transform rounded-lg bg-neutral-800/80 shadow-lg"></div>
            <div className="absolute left-8 top-4 h-28 w-20 rotate-3 transform rounded-lg bg-neutral-700/80 shadow-lg"></div>
            <div className="absolute left-16 top-2 h-28 w-20 -rotate-3 transform rounded-lg bg-neutral-600/80 shadow-lg"></div>
            <CloudIcon className="absolute bottom-0 right-0 h-16 w-16 text-neutral-700/50" />
          </div>

          <SignInButton forceRedirectUrl={"/drive"}>
            <button className="w-full rounded-md bg-white px-6 py-2 text-sm font-semibold text-black shadow transition hover:bg-neutral-200">
              Sign in
            </button>
          </SignInButton>
        </div>
        <div className="flex justify-center">
          <p className="text-sm text-neutral-400">
            Access your files securely from anywhere
          </p>
        </div>
      </div>
      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} T3 Drive. All rights reserved.
      </footer>
    </>
  );
}
