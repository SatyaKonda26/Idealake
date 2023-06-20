export const getStaticPaths = () => {
  const paths = vacancies.map((curElm) => {
    return {
      params: { jobdetail: curElm.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.jobdetail;
  const vacanciesID = vacancies.filter((vacancy) => vacancy.id == id);

  return {
    props: { vacanciesID },
  };
};

const Page = (props) => {
  return (
    <>
      <JobPost data={props.vacanciesID[0]} />
    </>
  );
};

export default Page;
