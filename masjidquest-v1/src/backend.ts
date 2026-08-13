import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://example.supabase.co', process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'public-demo', { auth: { storage: AsyncStorage, persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } });
