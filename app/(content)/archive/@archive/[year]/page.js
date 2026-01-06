import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/new";

const NewsByYearPage = ({params}) => {
  const {year}=params;
  console.log(year)
  const news=getNewsForYear(year) //array news
  //filter the news by year 
  return (
    <NewsList news={news}/>
  )
}

export default NewsByYearPage