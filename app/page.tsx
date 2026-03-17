import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
	const cookieStore = await cookies();
	const supabase = createClient(cookieStore);
	const { data: poems } = await supabase.from('poems').select();
	console.log(poems);
	return (
		<ul>
			{poems?.map((poem) => (
				<li key={poem.id}>{poem.title}</li>
			))}
		</ul>
	);
}
