import { useState }  from 'react'
import { createClient } from '@supabase/supabase-js'

const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2bnNvenF1ZWtseWhxaXhxb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NTcxNzQsImV4cCI6MjA5NDIzMzE3NH0.kIa_9L_8iYMe94muEmAauDqZZbhJp7kUa-W6AapfFpg"
const url="https://bvnsozqueklyhqixqowv.supabase.co"

const supabase = createClient(url, key)