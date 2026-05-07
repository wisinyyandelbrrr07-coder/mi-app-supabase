import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bgrtyywqeeproydflobv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJncnR5eXdxZWVwcm95ZGZsb2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNjA1MzEsImV4cCI6MjA5MzczNjUzMX0.5PYMNWaqBXbBnC8wAa0OvITOHVPh7FFMjpYRYG--lk4'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
    const { data, error } = await supabase
        .from('estudiantes')
        .select('*')

    if (error) {
        console.log('Error:', error)
    } else {
        console.log('Datos:', data)
    }
}

obtenerEstudiantes()