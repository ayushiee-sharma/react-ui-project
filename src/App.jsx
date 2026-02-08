import Parent from "./components/comp1"
import 'remixicon/fonts/remixicon.css'
const App = () => {
  const jobs = [
  {
    img: "https://imgs.search.brave.com/rVyszvcdPqcGBp12du5o0h3Yfb7VpHOWz9J80UfnR9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvYW1hem9uL3Nt/YWxsL2FtYXpvbl9Q/TkcyNy5wbmc",
    save: "save",
    comp: "Amazon",
    position: "Senior UI/UX Designer",
    nature: "Part-time",
    level: "Senior Level",
    salary: "$120/hr",
    button: "Apply Now",
    location: "Mumbai, India",
  },
  {
    img: "https://imgs.search.brave.com/Zzvl7vBD3N1kQELxTl2JTlAE81KWWdA1ZnkdSlmhjeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
    save: "save",
    comp: "Google",
    position: "Product Designer",
    nature: "Full-time",
    level: "Mid Level",
    salary: "$95/hr",
    button: "Apply Now",
    location: "Bangalore, India",
  },
  {
    img: "https://imgs.search.brave.com/R_nB1PngmkcRATrLLVejmsMOiUoCyjZkvpj1936TU8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLWltYWdlLTIz/LnBuZw",
    save: "save",
    comp: "Microsoft",
    position: "UX Researcher",
    nature: "Full-time",
    level: "Senior Level",
    salary: "$110/hr",
    button: "Apply Now",
    location: "Hyderabad, India",
  },
  {
    img: "https://imgs.search.brave.com/TnycI2USR2aFyj6rX0jnYCSRHSGGaJTDLxbYSp-PvJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTAvR2xv/c3N5LUFwcGxlLUxv/Z28tUE5HLVBob3Rv/cy5wbmc",
    save: "save",
    comp: "Apple",
    position: "UI Designer",
    nature: "Contract",
    level: "Mid Level",
    salary: "$105/hr",
    button: "Apply Now",
    location: "Remote",
  },
  {
    img: "https://imgs.search.brave.com/MYYcZlL9uDhp42NrQ0jdJyiyp9fs4fj9zwEsVCZFfNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY2Lzdj/L2FjLzY2N2NhY2Fj/ZTk3MjM0MmEyM2Uw/MTUyYTEyMWVlM2Zk/LmpwZw",
    save: "save",
    comp: "Flipkart",
    position: "UX Designer",
    nature: "Full-time",
    level: "Junior Level",
    salary: "$60/hr",
    button: "Apply Now",
    location: "Bangalore, India",
  },
  {
    img: "https://imgs.search.brave.com/MMYUcOEI85TPySnSBiMbDzqFqC1PvK-be4xnEMdnSQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TcG90aWZ5/L1Nwb3RpZnktTG9n/by53aW5lLnN2Zw",
    save: "save",
    comp: "Spotify",
    position: "Visual Designer",
    nature: "Remote",
    level: "Senior Level",
    salary: "$115/hr",
    button: "Apply Now",
    location: "Remote",
  },
  {
    img: "https://imgs.search.brave.com/u1Uqc8jkRSSmpNDivzHqVvO5f5q5XbyBCzw3_wOuW_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
    save: "save",
    comp: "Netflix",
    position: "Product UI Designer",
    nature: "Full-time",
    level: "Senior Level",
    salary: "$130/hr",
    button: "Apply Now",
    location: "Mumbai, India",
  },
  {
    img: "https://imgs.search.brave.com/hNyWX8gVGlfS_fIvnFfSNfg-x0Ye9EaSvbehrI1W4Cg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI4LzIvYWlyYm5i/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTI4NDkw/Ny5wbmc",
    save: "save",
    comp: "Airbnb",
    position: "Experience Designer",
    nature: "Remote",
    level: "Mid Level",
    salary: "$100/hr",
    button: "Apply Now",
    location: "Remote",
  },
  {
    img: "https://imgs.search.brave.com/jP6D9y0SzKqFT64HkZ1jDKmlUPDid0Mh6ftWaCaQPEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/em9oby5zdmc",
    save: "save",
    comp: "Zoho",
    position: "UI Engineer",
    nature: "Full-time",
    level: "Junior Level",
    salary: "$55/hr",
    button: "Apply Now",
    location: "Chennai, India",
  },
  {
    img: "https://imgs.search.brave.com/eedfNfwo1sXIqA8SA0aYpljton_D3vdjjvD63Vv098M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzIvcGF5dG0t/bG9nby1wbmdfc2Vl/a2xvZ28tMzA1NTQ5/LnBuZw",
    save: "save",
    comp: "Paytm",
    position: "UX Analyst",
    nature: "Part-time",
    level: "Mid Level",
    salary: "$70/hr",
    button: "Apply Now",
    location: "Noida, India",
  },
  {
    img: "https://imgs.search.brave.com/nD3yKjOY9c2xNAOXoGzR2sFxNjutwgRAjaqLjhWa1pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0xOTkzLTIwMTQt/NzAweDM5NC5wbmc",
    save: "save",
    comp: "Adobe",
    position: "Design Systems Lead",
    nature: "Full-time",
    level: "Senior Level",
    salary: "$125/hr",
    button: "Apply Now",
    location: "Pune, India",
  },
];

  return (
    <div className="main">  
          {jobs.map((elements)=>{
                return(<Parent img={elements.img} save={elements.save} comp={elements.comp} position={elements.position} nature={elements.nature} 
                level={elements.level} salary={elements.salary} button={elements.button} location={elements.location}/>)


           })};
    </div>
  
  )
}

export default App
