import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";

function Account() {
  const { data } = useSession() || {};
  const router = useRouter();

  console.log({ data });
  return (
    <Layout>
      {!data ? (
        <div className="m-10 space-y-2">
          <p>user not logged in</p>
          <button
            className="px-3 py-1 rounded bg-purple-600 text-sm font-bold text-white"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="p-5 flex gap-5 shadow-xl m-10">
          <div className="w-20 h-20">
            <img
              src={data?.user?.image}
              className="w-full rounded h-full object-cover object-center"
              alt=""
            />
          </div>

          <div className="space-y-2">
            <div>
              <p className="font-bold">{data?.user?.name}</p>
              <p>{data?.user?.email}</p>
            </div>
            <button
              onClick={signOut}
              className="px-3 py-1 rounded bg-purple-600 text-sm font-bold text-white"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Account;
