import { Culture } from "./culture/Culture";
// import JoinUs from "./join-us/JoinUs";
// import UploadResume from "./uploadResume/UploadResume";
import Vacancy from "./vacancies/Vacancy";
import style from "./careersmain.module.css";

export default function CareersMain() {
  return (
    <>
      <Vacancy />
      <Culture />
      <div className={style.oval_bg}>
        {/* <UploadResume /> */}
        {/* <JoinUs /> */}
      </div>
    </>
  );
}
