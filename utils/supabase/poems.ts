import { createClient } from '@/utils/supabase/client';

type Poem = {
	title: string;
	text: string;
	publish_year: number;
	author: number;
	tags: string;
};

export async function getPoem(id: number) {
	const supabase = createClient();
	return supabase.from('poems').select().eq('id', id).single();
}

export async function createPoem(rowDict: Poem) {
	const supabase = createClient();
	return supabase.from('poems').insert(rowDict);
}
