import styles from "./page.module.css";




// For Components
import { MainBg } from "@/app/Components/MainBg/MainBg";
import { ShootingTraining } from "@/app/Components/ShootingTraining/ShootingTraining";
import Wrapper from "./Components/Wrapper/Wrapper";
import { NewModel } from "./Components/newModel/newModel";
import { OurBlogs } from "./Components/OurBlogs/OurBlogs";

export default function Home() {
  return (
    <>
      <MainBg />

      <Wrapper>
        <ShootingTraining />

        <NewModel />

        {/* For Blogs */}
        <OurBlogs />

      </Wrapper>


    </>
  );
}
