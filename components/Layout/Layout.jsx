import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import Menubar from "../Menubar";
import Sidebar from "../Sidebar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Twitter 1.0</title>
        <link rel="stylesheet" href="/twitter.png" />
      </Head>

      <Toaster />
      <body>
        <div className="md:max-w-[90vw] mx-auto flex">
          <Menubar />
          <main className="flex-1 border-x border-slate-300">{children}</main>
          <Sidebar />
        </div>
      </body>
    </>
  );
}

export default Layout;
