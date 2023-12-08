import { StatusCards, History } from "components";
import { DashboardLayout } from "layouts";

const Home = () => {
  return (
    <DashboardLayout>
      <StatusCards />
      <History />
    </DashboardLayout>
  );
};

export default Home;
