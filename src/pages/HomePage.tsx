import { FeaturedSpotlight } from "../components/feature-spotlight";
import { PageLayout } from "../components/PageLayout";
import { SEO, seoConfig } from "../components/SEO";

const spotlights = [
  {
    title: "Berserk",
    index: "01",
    img: "/images/Screenshot_104.png",
    hoverImg: "/images/ArbreRouge.jpg",
    offsetY: 0,
  },
  {
    title: "YumeTrack",
    index: "02",
    img: "/images/Screenshot_35.png",
    hoverImg: "/images/ChampsRouge.jpg",
    offsetY: 30,
  },
  {
    title: "Japanese Art",
    index: "03",
    img: "/images/Screenshot_103.png",
    hoverImg: "/images/MontFuji.jpg",
    offsetY: 100,
  },
  {
    title: "Generative Art",
    index: "04",
    img: "/images/Screenshot_102.png",
    hoverImg: "/images/TempleJaponais.jpg",
    offsetY: 20,
  },
];

export default function HomePage() {
  return (
    <PageLayout title="ホーム" subtitle="HŌMU — HOME" isHome={true}>
      <SEO {...seoConfig.home} />

      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-16 -mt-24 md:mt-0">
        {spotlights.map((spot, idx) => (
          <FeaturedSpotlight
            key={idx}
            title={spot.title}
            index={spot.index}
            img={spot.img}
            hoverImg={spot.hoverImg}
            offsetY={spot.offsetY}
          />
        ))}
      </div>
    </PageLayout>
  );
}
