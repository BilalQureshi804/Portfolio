import styles from "./about.module.css"

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <p>I'm a passionate web developer with experience in React, Next.js, and various other web technologies.</p>
      <h2>Skills</h2>
      <ul className={styles.skills}>
        <li>React</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  )
}

