import Link from 'next/link';
import { getAllPoems } from '@/utils/supabase/poems';
import styles from './home.module.css';

export default async function Home() {
	const { data: poems } = await getAllPoems();
	return (
		<div>
			<ul className={styles.poem_list}>
				<h1>Boaz & Mac's Favorite Poems</h1>
				{poems?.map((poem) => (
					<li key={poem.id}>
						<Link href={`/poem/${poem.id}`}>{poem.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
