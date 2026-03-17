import { getPoem } from '@/utils/supabase/poems';

export default async function PoemPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const { data: poem } = await getPoem(Number(id));
	console.log(id);
	return (
		<article>
			<h1>{poem.title}</h1>
			<pre>{poem.text}</pre>
		</article>
	);
}

interface PoemProps {
	id: number;
	title: string;
	text: string;
	publish_year: number;
	author_id: number;
}
