import { createClient } from '@/utils/supabase/client';

export async function getPoem(id: number) {
	const supabase = createClient();
	return supabase.from('poems').select().eq('id', id).single();
}
