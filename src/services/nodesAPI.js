import axios from 'axios'

// URL endpoint utama - Diubah menjadi 'nodes' sesuai nama tabel Supabase Anda
const API_URL = "https://zfavihgqjmvtoemjcjjg.supabase.co/rest/v1/nodes"

// API KEY (Anon Key) Supabase Anda
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmYXZpaGdxam12dG9lbWpjampnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2Mjg1MTksImV4cCI6MjA5NzIwNDUxOX0.TkC5igiuDnTHzK4zdzi7BZuxHXn2H68axO0bVtTVg10"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const nodesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    }
}