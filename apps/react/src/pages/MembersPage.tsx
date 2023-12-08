import { DashboardLayout } from "layouts";
import { TeamMemberCard } from "components";
import { api } from "trpc";
import { Spinner } from "@nextui-org/react";

const MembersPage = () => {
  const { data: members, isLoading } = api.member.getMembers.useQuery();

  if (!members) {
    return null;
  }

  return (
    <DashboardLayout>
      {isLoading ? (
        <div className="w-full h-64 flex items-center justify-center flex-col gap-y-4">
          <Spinner />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 my-4">
          {members?.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              twitter={member.twitter}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default MembersPage;
