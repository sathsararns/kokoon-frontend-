import { useState }  from 'react'

const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2bnNvenF1ZWtseWhxaXhxb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NTcxNzQsImV4cCI6MjA5NDIzMzE3NH0.kIa_9L_8iYMe94muEmAauDqZZbhJp7kUa-W6AapfFpg"
const url="https://bvnsozqueklyhqixqowv.supabase.co"

constsupabase = createClient(url, key)

export default function Test() {
  const [file, setFile] = useState(null);

  function uploadFile() {
    console.log(file);
  }
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5FB] relative overflow-hidden font-sans">
      <input type="file" 
      onChange={(e) => setFile(e.target.files[0])}
      />
      <button 
      className='bg-blue-500'
      onClick={uploadFile}>
        Upload
      </button>
    </div>
  )
}

