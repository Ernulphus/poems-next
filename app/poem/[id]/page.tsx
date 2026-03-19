import { getAuthor } from '@/utils/supabase/authors';
import { getPoem } from '@/utils/supabase/poems';

function AuthorLine(props: AuthorProps) {
	const { name, birth_year, death_year, nationality } = props;
	return (
		<div>
			<h3>{name}</h3>
			{birth_year && (
				<p>
					{birth_year} - {death_year || ''}
				</p>
			)}
			<p>{nationality}</p>
			<br />
		</div>
	);
}

interface AuthorProps {
	name: string;
	birth_year?: number;
	death_year?: number;
	nationality?: string;
}

export default async function PoemPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const { data: poem } = await getPoem(Number(id));
	const { data: author } = await getAuthor(poem.author);
	console.log(author);
	const { name, birth_year, death_year, nationality } = author;
	return (
		<article>
			<h1>{poem.title}</h1>
			<AuthorLine
				name={name}
				birth_year={birth_year}
				death_year={death_year}
				nationality={nationality}
			/>
			<pre>{poem.text}</pre>
		</article>
	);
}
