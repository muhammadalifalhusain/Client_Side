import CardGoal from "../component/elements/Card/CardGoal";
import MainLayout from "../component/layout/MainLayout";
import CardCategory from "../component/Fragments/CardCategory";
const GoalsPage = () => {
    return (
      <MainLayout type="goal">
        <CardCategory />
        <CardGoal />
      </MainLayout>
    );
  };

export default GoalsPage;
