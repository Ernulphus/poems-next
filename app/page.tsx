import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import styles from './home.module.css';

export default async function Home() {
	const supabase = createClient();
	const { data: poems } = await supabase.from('poems').select();
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
