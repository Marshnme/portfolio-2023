import styles from './navStyles.module.css';

const Nav = () => {
	return (
		<div className={styles.navContainer}>
			<ul>
				<li>Home</li>
				<li>Projects</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Nav;
