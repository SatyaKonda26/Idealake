import Image from "next/image";
import BlogArticle from "../../components/Blogs/blog-article/BlogArticle";

export const getStaticPaths = async () => {
  const data = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/blogposts?$expand=*`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const res = await data.json();

  const paths = res.value.map((val) => {
    return {
      params: {
        blog: val.Id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.blog;
  const data = await fetch(
    `https://sitefinityheadlesscmsapi.idealake.com/api/idealake/blogposts?$expand=*`,
    {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  );
  const res = await data.json();
  const blogData = res.value.filter((val) => val.Id === id);

  return {
    props: { blogData },
  };
};

export default function Blog({ blogData }) {
  const data = blogData[0];
  return <BlogArticle data={data} />;
}
