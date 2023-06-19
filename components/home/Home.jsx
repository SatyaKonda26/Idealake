import Blog from "./blog/Blog";
import OurTeam from "./our-team/OurTeam";

export default function Home({ data }) {
  return (
    <>
      <OurTeam />
      <Blog data={data} />
    </>
  );
}
