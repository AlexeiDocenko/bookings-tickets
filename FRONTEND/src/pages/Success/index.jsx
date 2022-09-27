import { Link } from 'react-router-dom';

import styles from './Success.module.scss';
import appStyle from '../../scss/App.module.scss';

export default function Success() {
	const root = `${appStyle.empty} ${appStyle.main}`;
	const btn = `${styles.button} ${appStyle.button}`;

	return (
		<div className={root}>
			<h1>поздравляем, билет забронирован🥳</h1>
			<Link className={btn} to={'/'}>
				назад к выбору
			</Link>
		</div>
	);
}
