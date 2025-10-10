import React, { ReactElement, useState, useEffect } from "react";
import Link from "next/link";

type MenuItem = {
  icon: ReactElement;
  title: string;
  description: string;
  href: string;
};

type SubmenuContent = {
  [key: string]: MenuItem[];
};

interface AppsDropdownMenuProps {
  submenuContent: SubmenuContent;
  initialActiveMenu?: keyof SubmenuContent;
}

export default function AppsDropdownMenu({
  submenuContent,
  initialActiveMenu,
}: AppsDropdownMenuProps): ReactElement {
  const menuKeys = Object.keys(submenuContent) as (keyof SubmenuContent)[];
  const [activeMenu, setActiveMenu] = useState<keyof SubmenuContent>(
    initialActiveMenu || menuKeys[0]
  );

  useEffect(() => {
    if (initialActiveMenu) {
      setActiveMenu(initialActiveMenu);
    }
  }, [initialActiveMenu]);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full min-h-54 max-w-5xl mx-auto flex">
        {/* Sidebar */}
        <div className="w-1/5 pr-6 border-r border-[#E8E8E8]">
          <ul className="space-y-4 text-gray-700 font-medium">
            {menuKeys.map((menu) => (
              <li
                key={menu}
                onClick={() => setActiveMenu(menu)}
                className={`cursor-pointer ${
                  activeMenu === menu
                    ? "text-purple-700 text-xl font-bold"
                    : "text-text-secondary text-xl font-medium"
                }`}
              >
                {menu}:
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w-full pl-6">
          <div className="font-semibold text-2xl text-purple-700 mb-6">
            {activeMenu}:
          </div>

          <div className="flex space-x-10">
            {submenuContent[activeMenu].map((item) => (
              <Link href={item.href} className="flex-1" key={item.title}>
                <div className="flex items-center mb-2">
                  {item.icon}
                  <span className="font-semibold text-lg text-black">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs text-text-secondary ml-7">
                  {item.description}
                </p>
              </Link>
            ))}

            {submenuContent[activeMenu].length === 0 && (
              <p className="text-gray-500 text-sm">
                No items available for {activeMenu}.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
