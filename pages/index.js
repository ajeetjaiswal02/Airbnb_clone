import Head from 'next/head'
import Banner from '../Components/Banner';
import Header from "../Components/Header";
import SmallCard from '../Components/SmallCard';
import MediumCard from '../Components/MediumCard';
import LargeCard from '../Components/LargeCard';
import LargeCard2 from '../Components/LargeCard2';
import Footer from '../Components/Footer';

export default function Home({exploredata,cardsData}) {
  return (
    <div className="">
      <Head>
        <title>AIR_BNB_IND</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Hedear*/}
      <Header />
      {/*Banner*/}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/*Exploring data*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {exploredata.map(item => (
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj"
          title="The Greatest outdoor"
          description="Wishlist curated for Airbnb."
          buttonText="Get Inspired"
        />

        {/*2nd Section*/}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(item => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>

        </section>


        <LargeCard2 img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities"
          buttonText="Learn more"
        />


      </main>
      {/*Footer*/}
      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const exploredata = await fetch("https://links.papareact.com/pyp").
  then((res) => res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1").
  then((res) => res.json());

  return {
    props: {
      exploredata,
      cardsData,
    }
  }
}
