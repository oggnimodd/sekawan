import { StatusCards, History, UnresolvedTickets, Tasks } from "components";
import { DashboardLayout } from "layouts";

const Home = () => {
  return (
    <DashboardLayout>
      <StatusCards />
      <History />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UnresolvedTickets />
        <Tasks />
      </div>
    </DashboardLayout>
  );
};

export default Home;
