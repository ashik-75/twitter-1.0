import Link from "next/link";
import { useRouter } from "next/router";

function Menu({ url, Icon, text, SolidIcon }) {
  const path = useRouter();
  const TagName = path.pathname === url ? SolidIcon : Icon;

  return (
    <div>
      <Link href={`${url}`}>
        <div
          className={`flex space-x-2 px-4 py-3 items-center hover:bg-gray-200 w-fit transition rounded-full ${
            path.pathname === url && "bg-gray-200"
          }`}
        >
          <TagName className="w-5 h-5" />
          <p
            className={`text-xl hidden md:inline ${
              path.pathname === url && "font-bold"
            }`}
          >
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Menu;
