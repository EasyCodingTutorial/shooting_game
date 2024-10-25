import styles from "./page.module.css";




// For Components
import { MainBg } from "@/app/Components/MainBg/MainBg";
import { ShootingTraining } from "@/app/Components/ShootingTraining/ShootingTraining";
import Wrapper from "./Components/Wrapper/Wrapper";
import { NewModel } from "./Components/newModel/newModel";

export default function Home() {
  return (
    <>
      <MainBg />

      <Wrapper>
        <ShootingTraining />

        <NewModel />

      </Wrapper>


    </>
  );
}
