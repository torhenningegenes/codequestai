import { createClient } from '@/utils/supabase/server';

export const LoggendInAs = async () => {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data?.user) {
        return null;
    }

    return (
        <div>
            <h1>Logged in as {data?.user?.email}</h1>
        </div>
    );
};
