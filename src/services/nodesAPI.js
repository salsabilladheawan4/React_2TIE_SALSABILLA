import axios from 'axios'

// 1. URL Utama diubah menjadi Base URL (Dihapus tulisan /notes di ujungnya)
const API_BASE_URL = "https://zfavihgqjmvtoemjcjjg.supabase.co/rest/v1"

// 2. API KEY (Anon Key) Supabase Anda
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmYXZpaGdxam12dG9lbWpjampnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2Mjg1MTksImV4cCI6MjA5NzIwNDUxOX0.TkC5igiuDnTHzK4zdzi7BZuxHXn2H68axO0bVtTVg10"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const nodesAPI = {
    // Ambil data catatan (ditambahkan /nodes)
    async fetchNotes() {
        const response = await axios.get(`${API_BASE_URL}/nodes`, { headers })
        return response.data
    },

    // Tambah data catatan baru (ditambahkan /nodes)
    async createNote(data) {
        const response = await axios.post(`${API_BASE_URL}/nodes`, data, { headers })
        return response.data
    },

    // Hapus catatan (ditambahkan /nodes)
    async deleteNote(id) {
        const response = await axios.delete(`${API_BASE_URL}/nodes?id=eq.${id}`, { headers })
        return response.data
    },

    // Fungsi Auth Login ke tabel users (ditambahkan /users)
    async loginUser(email, password) {
        const response = await axios.get(`${API_BASE_URL}/users?email=eq.${email}&password=eq.${password}`, { headers })
        return response.data 
    }
}