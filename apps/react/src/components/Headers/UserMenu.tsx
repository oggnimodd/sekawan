import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Skeleton,
  User,
} from "@nextui-org/react";
import { FC, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Power as LogOutIcon, Plus, LayoutDashboard, Bug } from "lucide-react";

const ICON_SIZE = 20;

const UserMenu: FC = () => {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const { signOut } = useAuth();

  if (!isLoaded) {
    return <Skeleton className="flex rounded-full w-8 h-8" />;
  }

  useEffect(() => {
    if (isLoaded && !user) {
      navigate("/sign-in");
    }
  }, [isLoaded, user]);

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          classNames={{
            base: "w-8 h-8",
          }}
          as="button"
          isBordered
          className="transition-transform select-none"
          src={user?.imageUrl}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" disabledKeys={["profile"]}>
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            textValue="Profile"
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name={user.fullName}
              description={user.primaryEmailAddress?.emailAddress}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: user.imageUrl,
              }}
            />
          </DropdownItem>
        </DropdownSection>

        <DropdownItem
          as={Link}
          // @ts-ignore
          to="/tickets/new"
          startContent={<Plus size={ICON_SIZE} className="mr-2" />}
          key="Create new ticket"
        >
          Create new ticket
        </DropdownItem>
        <DropdownItem
          as={Link}
          // @ts-ignore
          to="/"
          startContent={<LayoutDashboard size={ICON_SIZE} className="mr-2" />}
          key="dashboard"
        >
          Dashboard
        </DropdownItem>
        <DropdownItem
          href=" https://github.com/oggnimodd/sekawan"
          as="a"
          startContent={<Bug size={ICON_SIZE} className="mr-2" />}
          key="report-bug"
        >
          Report a bug
        </DropdownItem>
        <DropdownItem
          startContent={<LogOutIcon className="mr-2" size={ICON_SIZE} />}
          onPress={() => signOut()}
          key="sign-out"
          className="text-danger"
          color="danger"
        >
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserMenu;
