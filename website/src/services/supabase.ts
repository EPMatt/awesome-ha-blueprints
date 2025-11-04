import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Extend Window interface to include our env variables
declare global {
  interface Window {
    env?: {
      SUPABASE_URL: string
      SUPABASE_ANON_KEY: string
    }
  }
}

// Initialize Supabase client
let supabase: SupabaseClient | null = null

/**
 * Initialize the Supabase client (called once when app starts)
 */
export const initializeSupabase = ({
  supabaseUrl,
  supabaseKey,
}: {
  supabaseUrl: string
  supabaseKey: string
}): void => {
  supabase = createClient(supabaseUrl, supabaseKey)
  console.log('Supabase initialized')
}

/**
 * Record a blueprint download in the Supabase database
 *
 * @param category The blueprint category
 * @param id The blueprint ID
 * @param version The blueprint version
 * @returns Promise that resolves to the insertion result or null
 */
export const recordBlueprintDownload = async (
  category: string,
  id: string,
  version: string = 'latest',
): Promise<boolean> => {
  if (!supabase) {
    console.error('Supabase client not initialized')
    return false
  }

  try {
    const { error } = await supabase.from('blueprint_downloads').insert([
      {
        blueprint_category: category,
        blueprint_id: id,
        blueprint_version: version,
        download_date: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error('Error recording blueprint download:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Exception recording blueprint download:', error)
    return false
  }
}

/**
 * Get the total downloads for a blueprint
 *
 * @param category The blueprint category
 * @param id The blueprint ID
 * @returns Promise that resolves to the total downloads count or 0
 */
export const getBlueprintDownloads = async (
  category: string,
  id: string,
): Promise<number> => {
  if (!supabase) {
    console.error('Supabase client not initialized')
    return 0
  }

  try {
    const { count, error } = await supabase
      .from('blueprint_downloads')
      .select('*', { count: 'exact' })
      .eq('blueprint_category', category)
      .eq('blueprint_id', id)

    if (error || count === null) {
      console.error('Error getting blueprint downloads:', error)
      return 0
    }

    return count
  } catch (error) {
    console.error('Exception getting blueprint downloads:', error)
    return 0
  }
}
