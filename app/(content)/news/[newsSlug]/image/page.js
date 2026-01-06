import { DUMMY_NEWS } from "@/dummy-news";

const NewImage = ({ params }) => {
  //issue: how can we get the slug
  const { newsSlug } = params;
  const selectedNews = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${selectedNews.image}`} />
    </div>
  );
};

export default NewImage;
