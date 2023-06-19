import Home from "../components/home/Home";

export const getStaticProps = async () => {
  const data = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/blogposts?$expand=*`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const datares = await data.json();

  return {
    props: { datares },
  };
};

export default function HomePage({ datares }) {
  return (
    <>
      <Home data={datares.value} />
    </>
  );
}
