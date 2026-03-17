import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';

export default async function Home() {
	const supabase = createClient();
	const { data: poems } = await supabase.from('poems').select();
	return (
		<ul>
			{poems?.map((poem) => (
				<li key={poem.id}>
					<Link href={`/poem/${poem.id}`}>{poem.title}</Link>
				</li>
			))}
		</ul>
	);
}
