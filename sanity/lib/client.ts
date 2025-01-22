import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "spwy4iw6",
  dataset: "production",
  apiVersion: '2025-01-20',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
