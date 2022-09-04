import Link from "next/link";
import Header from "@/components/Header";


const Home: React.FC = () => (
  <section className='mx-auto max-w-6xl py-6 bg-beige'>
    <h1 className='text-lg font-bold text-primary-800'>
      
    </h1>
    <Header />
    <div className="text-lg">
<Link href="/other" >
  other
</Link>
</div>
  </section>
      
);

  

export default Home;
