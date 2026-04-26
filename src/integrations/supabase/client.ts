import { createClient as createSsrClient } from '@/utils/supabase/client';

export const supabase = createSsrClient();