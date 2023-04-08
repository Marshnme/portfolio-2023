import Head from 'next/head';
import Nav from '@/components/header/Nav.jsx';
import Skills from '@/components/main/Skills';
import Projects from '@/components/main/Projects';
import About from '@/components/main/About';
import Contact from '@/components/main/Contact';
import Footer from '@/components/footer/Footer';
import styles from '@/styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Joshua Holtsclaw - Portfolio</title>
				<meta
					name="description"
					content="Portfolio website for Joshua Holtsclaw"
				/>
				<meta
					name="viewport"
					typeof="image"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<header className={styles.header}>
				<Nav />
				<section className={styles.headerContent}>
					<h2>
						Joshua <br></br> Holtsclaw
					</h2>

					<p className={styles.role}>Frontend Developer</p>
					<div className={styles.callToActionButtons}>
						<button className={styles.resumeButton}>Resume</button>
						<button className={styles.githubButton}>Github</button>
					</div>
				</section>
			</header>
			<main className={styles.main}>
				<Skills />
				<Projects />
				<About />
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}
