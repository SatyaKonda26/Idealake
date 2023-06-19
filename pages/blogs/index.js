import BlogList from "../../components/Blogs/BlogList";

export const getStaticProps = async () => {
  const title = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/contentitems?$filter=contains(Title,'Blog Listing Title')`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const titleres = await title.json();

  const subtitle = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/contentitems?$filter=contains(Title,'Blog Listing Subtitle')`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const subtitleres = await subtitle.json();

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
    props: { titleres, subtitleres, datares },
  };
};

export default function Blogs({ titleres, subtitleres, datares }) {
  const title = titleres.value[0].Content;
  const subtitle = subtitleres.value[0].Content;
  return <BlogList title={title} subtitle={subtitle} data={datares.value} />;
}
