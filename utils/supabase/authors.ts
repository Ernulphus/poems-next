import { createClient } from '@/utils/supabase/client';

export async function getAuthor(id: number) {
	const supabase = createClient();
	return supabase.from('poets').select().eq('id', id).single();
}
