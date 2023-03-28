import styles from './about.module.css';

const About = () => {
	return (
		<section className={styles.aboutContainer}>
			<h3>About</h3>
			<div className={styles.aboutDesc}>
				<p>
					I'm a frontend developer based out of Columbia, SC. I enjoy
					turning designs into working web pages and serving my
					clients to the best of my abilities. I have been programming
					off and on for multiple years, and im currently focusing on
					honing my skills and building websites full time.
				</p>
			</div>
		</section>
	);
};

export default About;
