import { DUMMY_NEWS } from "@/dummy-news";
const NewsDetailPage = ({ params }) => {
  const news = DUMMY_NEWS.find((item) => item.slug === params.newsSlug);

  if (!news) {
    return <div>News article not found.</div>;
  }

  return (
    <article className="news-article">
      
      <header>
        <img src={`/images/news/${news.image}`}/>
        <h1>{news.title}</h1>
        <time dateTime= {news.date}> {news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
};

export default NewsDetailPage;
