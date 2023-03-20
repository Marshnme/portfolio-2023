import styles from './skills.module.css';
import Image from 'next/image';
import Html5Icon from '../../../public/html-icon.svg';
import CssIcon from '../../../public/css-icon.svg';
import JSIcon from '../../../public/javascript-icon.svg';
import ReactIcon from '../../../public/react-js-icon.svg';
const Skills = () => {
	return (
		<section>
			<h3>Skills</h3>
			<div className={styles.skillList}>
				<Image
					src={Html5Icon}
					alt="HTML5 Icon"
					width="123"
					height="123"
				/>
				<p>HTML5</p>
				<Image src={CssIcon} alt="CSS Icon" width="123" height="123" />
				<p>CSS3</p>
				<Image
					src={JSIcon}
					alt="Javascript Icon"
					width="123"
					height="123"
				/>
				<p>Javascript</p>
				<Image
					src={ReactIcon}
					alt="React Icon"
					width="123"
					height="123"
				/>
				<p>React</p>
			</div>
		</section>
	);
};

export default Skills;
