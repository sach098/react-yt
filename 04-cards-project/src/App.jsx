import React from 'react'
import Card from './components/card'




const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzChlzw4_AmFlEk86g0TiPq7s9vBGzBlpw7N6U6Dp-muzJ4FH9Dm3Ee0&s=10",
    companyName: "Meta",
    role: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35 - $50/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Google",
    role: "Software Engineer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45 - $70/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    role: "Backend Developer",
    datePosted: "3 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30 - $45/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "data:image/jpeg;base64,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",
    companyName: "Apple",
    role: "iOS Developer",
    datePosted: "10 weeks ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$50 - $75/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qzoOYyoMbyjiQeA9szOgQKtgL5uzEenneZFF4jVKvnkInfgKKPzZKJaS&s=10",
    companyName: "Microsoft",
    role: "Full Stack Developer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40 - $60/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6YcCQ7zlbnumnb1zMdvBHdi6t9bTKHhL61QiG8tMYQ&s",
    companyName: "Netflix",
    role: "UI/UX Designer",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55 - $80/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "NVIDIA",
    role: "AI/ML Engineer",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45 - $65/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HpwNmXWFlzj9jc93MKv78jSOvRtxfe8vKTRdsumXxQ&s=10",
    companyName: "Adobe",
    role: "React Developer",
    datePosted: "3 weeks ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30 - $45/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CImj2-12vgf_U1WKFqfn3waqa7EOXgFQiCnEAQc-Bg&s=10",
    companyName: "IBM",
    role: "Cloud Engineer",
    datePosted: "8 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$35 - $55/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrn-ikBlwrgxAQMicc8PQClBIsFFPGxVTAROOPZ12TA&s=10",
    companyName: "Salesforce",
    role: "Software Developer",
    datePosted: "10 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45 - $70/hour",
    location: "Hyderabad, India"
  }
];
  
  return (
    
     <div className='parent'>
      {jobOpenings.map(function(elem){
    return <Card company={elem.companyName} role={elem.role} datapost={elem.datePosted} time={elem.tag1} 
    tag2={elem.tag2} logo={elem.brandLogo} pay={elem.pay} location={elem.location} />

   })}
      
       </div>

  )
}

export default App
