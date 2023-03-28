import styles from './contact.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const Contact = () => {
	const schema = z.object({
		email: z.string().email({ message: 'Invalid email address' }),
		fullName: z
			.string()
			.min(3, { message: 'Minimum of three characters required.' }),
	});

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema), mode: 'onChange' });

	const onSubmit = (data) => console.log(data);
	// watch input value by passing the name of it
	// console.log(watch('email'));
	return (
		<section className={styles.contactContainer}>
			<h3>Contact</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder="Full Name"
					{...register('fullName', { required: true })}
				/>
				<p>{errors.fullName?.message}</p>
				<input
					placeholder="Email Address"
					{...register('email', { required: true })}
				/>
				<p>{errors.email?.message}</p>
				<input type="submit" />
			</form>
		</section>
	);
};

export default Contact;
