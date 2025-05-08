// @flow strict
import Image from 'next/image';

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "OWASP Top 10 Web Application Security",
      platform: "Udemy | 2024",
      image: "/images/owasp.png",  // asegúrate de tener la imagen en /public/images/
      description: [
        "Gained foundational knowledge of web application security principles, including identification and mitigation of common vulnerabilities (XSS, SQL Injection, CSRF, etc.).",
        "Applied secure coding best practices in web development."
      ]
    },
    {
      id: 2,
      title: "Máster en Python: Aprende Python, Django, Flask y Tkinter",
      platform: "Udemy | In Progress (Expected 2025)",
      image: "/images/python-master.png",  // asegúrate de tener la imagen en /public/images/
      description: [
        "Comprehensive program covering Python programming, back-end development with Django and Flask, and desktop applications with Tkinter.",
        "Focused on building full-stack web applications and understanding MVC architecture."
      ]
    }
  ];

  return (
    <div id='certifications' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div key={cert.id} className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg overflow-hidden">
            <div className="h-44 lg:h-52 w-full overflow-hidden relative">
              <Image
                src={cert.image}
                alt={cert.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-amber-300 mb-4">{cert.platform}</p>
              <ul className="list-disc list-inside text-sm text-[#d3d8e8] space-y-2">
                {cert.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
