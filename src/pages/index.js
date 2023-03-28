import Head from 'next/head';
import Image from 'next/image';
import Nav from '@/components/header/Nav.jsx';
import Skills from '@/components/main/Skills';
import Projects from '@/components/main/Projects';
import About from '@/components/main/About';
import Contact from '@/components/main/Contact';
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
				</section>
			</header>
			<main>
				<Skills />
				<Projects />
				<About />
				<Contact />
			</main>
			<footer></footer>
		</>
	);
}
