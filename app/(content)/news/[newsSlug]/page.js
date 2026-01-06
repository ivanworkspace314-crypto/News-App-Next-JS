import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
const NewsDetailPage = ({ params }) => {
  const news = DUMMY_NEWS.find((item) => item.slug === params.newsSlug);
  const currentSlug=params.newsSlug;
  console.log("current slug:"+ currentSlug)
  if (!news) {
    return <div>News article not found.</div>;
  }

  return (
    <article className="news-article">
      
      <header>
        
        <Link href={`/news/${currentSlug}/image`} ><img src={`/images/news/${news.image}`}/></Link>
        <h1>{news.title}</h1>
        <time dateTime= {news.date}> {news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
};

export default NewsDetailPage;
