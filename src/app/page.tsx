import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image className='image' src="/bilal.jpg" alt="profile picture" width={300} height={300} /> 
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I m a web developer passionate about creating amazing web experiences.</p>
      <a href="/about" className="btn">
        Learn More About Me
      </a>
    </div>
  );
}
