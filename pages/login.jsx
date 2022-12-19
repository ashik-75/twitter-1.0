import { getProviders, signIn } from "next-auth/react";
import React from "react";
const images = {
  github: "github.png",
  twitter: "twitter.png",
  google: "google.png",
};
function login({ providers }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-10 shadow space-y-4">
        {Object.values(providers).map((provider) => {
          return (
            <button
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "/",
                })
              }
              key={provider.id}
              className="flex py-2 px-4 w-full items-center space-x-2 border rounded-full shadow"
            >
              <img src={images[provider?.id]} className="h-5 w-5" />
              <p> Continue with {provider.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const response = await getProviders();

  return {
    props: {
      providers: response,
    },
  };
}
