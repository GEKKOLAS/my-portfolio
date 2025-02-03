import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'

const Services = () => {
  return (
    <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
  )
}
export default Services

export const services = [
    {
      
      title: "Web Development",
      description:
        "Designing, developing, and maintaining web applications using ASP.NET, HTML, CSS, JavaScript, and frameworks like Angular or React.",
      link: "https://stripe.com",
    },
    {
      title: "API Development",
      description:
        "Building and integrating RESTful and GraphQL APIs to facilitate communication between different software systems.",
      link: "https://netflix.com",
    },
    {
      title: "Database Management",
      description:
        "Designing and managing databases using SQL Server, MySQL, or NoSQL databases like MongoDB, including writing queries, stored procedures, and optimizing performance.",
      link: "https://google.com",
    },
    {
      title: "Cloud Services",
      description:
        "Deploying and managing applications on cloud platforms like Microsoft Azure, AWS, or Google Cloud, including utilizing cloud services for storage, computing, and DevOps.",
      link: "https://meta.com",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications using Xamarin or .NET MAUI, ensuring smooth performance and a great user experience on both Android and iOS devices.",
      link: "https://amazon.com",
    },
    {
      title: "DevOps and Continuous Integration/Continuous Deployment (CI/CD)",
      description:
        "Implementing CI/CD pipelines using tools like Azure DevOps, Jenkins, or GitHub Actions to automate testing, building, and deploying applications, ensuring faster and more reliable releases.",
      link: "https://microsoft.com",
    },

    ];
