import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";
import AddListPopover from "../lists/add-list-popover";
import ListRoutes from "../lists/list-routes";
import { UserProfile } from "../auth/user-profile";

const Sidebar = () => {
  return (
    <div className="h-full relative flex flex-col overflow-y-auto pb-10 bg-white md:m-4 shadow-sm rounded-lg">
      <div className="px-6 mt-8">
        <Logo size="sm" />
      </div>
      <div className="flex flex-col w-full h-full">
        <SidebarRoutes />
        <ListRoutes />
        <AddListPopover />
      </div>
      <div className="absolute bottom-0 flex justify-center w-full pb-20">
        <div className="border-s px-2">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
