import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import api from "../../lib/api";

export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value});

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try{
      const res=await api.post("/message",form);
      setStatus(res.data.message);
      setForm({name:"",email:"",subject:"",message:""});
    }catch{
      setStatus("Failed to send message.");
    }finally{
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-transparent py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-slate-900">Contact Me</h2>
        <p className="text-slate-600 text-center mt-4 mb-16 text-lg">
          Feel free to connect with me for internships, collaborations or opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl p-10">
            <div className="space-y-8">
              <div className="flex items-center gap-5"><Mail className="text-cyan-600"/><span>17vsvaibhav@gmail.com</span></div>
              <div className="flex items-center gap-5"><MapPin className="text-cyan-600"/><span>Bhubaneswar, Odisha</span></div>
              <div className="flex items-center gap-5"><FaLinkedin className="text-cyan-600"/><a href="https://www.linkedin.com/in/vaibhav-sharma-84352b310/" target="_blank" rel="noreferrer">LinkedIn</a></div>
              <div className="flex items-center gap-5"><FaGithub className="text-cyan-600"/><a href="https://github.com/VaibhavSharma0917" target="_blank" rel="noreferrer">GitHub</a></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-xl p-10 space-y-5">
            <input className="w-full border rounded-xl p-3" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input className="w-full border rounded-xl p-3" type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <input className="w-full border rounded-xl p-3" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
            <textarea className="w-full border rounded-xl p-3" rows="5" name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
            <button className="w-full bg-cyan-600 text-white rounded-xl py-3">{loading?"Sending...":"Send Message"}</button>
            {status && <p className="text-center text-green-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
