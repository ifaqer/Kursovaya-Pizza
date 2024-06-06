import news1 from '../../assets/news/news1.jpg'
import news2 from '../../assets/news/news2.jpg'
import news3 from '../../assets/news/news3.jpg'
import styles from './styles.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function News(){
  return (
    <div className={styles.block}>
      <Carousel responsive={responsive}>
        <div className={styles.blocknews}></div>
        <div className={styles.blocknews2}></div>
        <div className={styles.blocknews3}></div>
      </Carousel>
    </div>
  )
}
