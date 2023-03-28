import styles from './contact.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const Contact = () => {
	const schema = z.object({
		email: z.string().email({ message: 'Invalid email address' }),
		firstName: z.string().min(1, { message: 'First Name is required.' }),

		lastName: z.string().min(1, { message: 'Last Name is required.' }),

		contactMessage: z
			.string()
			.min(1, { message: 'Message is a required field' })
			.max(500, { message: 'Max Length of 500 Characters' }),
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
	let messageWatch = watch('contactMessage');
	console.log(messageWatch);
	return (
		<section className={styles.contactContainer}>
			<h3>Contact</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					placeholder="First Name"
					{...register('firstName', { required: true })}
				/>
				<p>{errors.firstName?.message}</p>
				<input
					placeholder="last Name"
					{...register('lastName', { required: true })}
				/>
				<p>{errors.lastName?.message}</p>
				<input
					placeholder="Email Address"
					{...register('email', { required: true })}
				/>
				<p>{errors.email?.message}</p>
				<textarea
					{...register('contactMessage', {
						required: true,
					})}
					cols="30"
					rows="10"
					placeholder="Enter Your Message"
				></textarea>
				<p>{errors.contactMessage?.message}</p>
				<div>
					<button type="submit">Send Message</button>
				</div>
			</form>
		</section>
	);
};

export default Contact;
