import styles from './navStyles.module.css';

const Nav = () => {
	return (
		<div className={styles.navContainer}>
			{/* <h3>Holtsy</h3> */}
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Nav;
