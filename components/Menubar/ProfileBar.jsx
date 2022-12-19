import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function ProfileBar({ user }) {
  if (!user) {
    return;
  }
  return (
    <div className="flex absolute bottom-3 left-3 sm:left-10 md:left-0 space-x-3 items-center w-fit px-3 py-2 hover:bg-slate-200 rounded-full">
      <div className="w-10 h-10 ">
        <img
          src={user?.image}
          className="w-full h-full rounded-full  object-cover object-top"
          alt=""
        />
      </div>
      <div className="space-x-3 hidden md:flex">
        <div>
          <p className="font-bold ">{user?.name}</p>
          <p className="text-sm text-slate-500 w-20 truncate">
            {user?.username || user?.email}
          </p>
        </div>
        <div>
          <EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;
