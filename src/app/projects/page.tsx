import styles from "./projects.module.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Food Tuck",
      description: "A quick commerce food delivery platform designed for seamless and fast food ordering. It ensures a smooth user experience with an intuitive UI, real-time order tracking, and multiple payment options.",
      image: "/project1.png",
      link: "https://food-tuck-plum.vercel.app/",
    },
    {
      id: 2,
      title: "ZAA Fabricora pk",
      description: "An e-commerce platform specializing in high-quality fabrics and clothing. Features include detailed product catalogs, personalized recommendations, and a secure shopping experience tailored for fashion enthusiasts.",
      image: "/project2.png",
      link: "https://zaa-fabricora-pk.vercel.app/",
    },
    {
      id: 3,
      title: "The Shoes World",
      description: "An online shoe store offering a wide range of stylish and comfortable footwear. Built with a user-friendly interface, secure checkout, and advanced filtering options to help customers find their perfect pair easily.",
      image: "/project3.png",
      link: "https://the-shoes-world.vercel.app/",
    },
    {
      id: 4,
      title: "Resume Builder",
      description: "Designed and developed a dynamic Resume Builder, enabling users to create professional resumes effortlessly. Features include customizable templates, real-time preview, and easy export options.",
      image: "/resume builder.png",
      link: "https://hackathon-milestone-puce-sigma.vercel.app/",
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
