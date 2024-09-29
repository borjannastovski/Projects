import Calendar from "@/components/CalendarComponent";
import Carousel from "@/components/Carousel";
import UserActivities from "@/components/UserActivities";
import UserInfo from "@/components/UserInfo";
import { UserType } from "@/types";
import { GetStaticProps } from "next";

interface Props {
  userData: UserType;
}

const User = ({ userData }: Props) => {
  return (
    <section className="user-section">
      <UserInfo data={userData} />
      <Carousel />
      <UserActivities userData={userData} />
      <Calendar />
    </section>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const userRes = await fetch("http://localhost:5001/user");
  const userData: UserType = await userRes.json();
  return {
    props: {
      userData,
    },
  };
};

export default User;
