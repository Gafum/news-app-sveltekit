import supabase from '$lib/db';

export async function load() {
    let { data, error } = await supabase
        .from('news')
        .select('*')
    if(error) return;
    return {data};
};