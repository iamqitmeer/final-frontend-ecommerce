import { Listbox, ListboxItem } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Button,
} from "@nextui-org/react";

export default function SideBar() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className="w-[25%] fixed right-0 left-0 h-screen flex justify-around flex-col p-12 border-r-1 border-black">
    <div >
        <i class="ri-twitter-x-fill hover:bg-gray-100 p-3 rounded-2xl cursor-pointer text-3xl font-bold"></i>
      </div>
      <div>
        <Listbox variant="faded" aria-label="Listbox menu with icons">
          <ListboxItem
            className="text-xl p-2"
            startContent={<i className="ri-home-7-line"></i>} // Note: changed class to className
          >
            <span className="text-xl ml-2">Home</span>
          </ListboxItem>
          <ListboxItem
            className="text-xl p-2"
            startContent={<i className="ri-search-2-line"></i>}
          >
            <span className="text-xl ml-2">Explore</span>
          </ListboxItem>
          <ListboxItem
            className="text-xl p-2"
            showDivider
            startContent={<i className="ri-message-2-line"></i>}
          >
            <span className="text-xl ml-2">Messages</span>
          </ListboxItem>
          <ListboxItem
            className="text-danger text-xl p-2"
            color="danger"
            startContent={<i className="ri-user-2-line"></i>}
          >
            {" "}
            <span className="text-xl ml-2">Profile</span>
          </ListboxItem>
        </Listbox>
        <Button className="w-full mt-4 text-md font-semibold" radius="full" color="primary" variant="shadow">
          Post
        </Button>
      </div>
      <div>
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              }}
              className="transition-transform"
              description="@tonyreichert"
              name="Tony Reichert"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">@tonyreichert</p>
            </DropdownItem>
            <DropdownItem key="edit_profile">Edit Profile</DropdownItem>
            <DropdownItem key="your_post">Your Post</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
