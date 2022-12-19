import { useRouter } from "next/router";
import React from "react";

function LoginBanner() {
  const router = useRouter();
  return (
    <div className="p-5 text-center">
      <button
        onClick={() => router.push("/login")}
        className="bg-twitter rounded-full font-bold text-white outline-none px-4 py-2 tracking-wider"
      >
        Login to Twitter
      </button>
    </div>
  );
}

export default LoginBanner;
