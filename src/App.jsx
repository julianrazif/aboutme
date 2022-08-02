export default function App() {
  return (
    <>
      <div
        id="hero"
        className="bg-red-200 min-h-[100vh] flex justify-center items-center"
        style={{ backgroundImage: 'url(/assets/bg.jpg)' }}>
        <div className="p-3">
          <h1 className="text-6xl text-[#636363] font-light">I'AM</h1>
          <h1 className="text-6xl text-[#636363] font-light">JULIAN RAZIF FIGARO</h1>
          <div className="mt-4 md:flex md:space-x-3">
            <a href="#education" className="inline-block text-center w-full mb-1 md:mb-0 md:w-auto p-3 px-8 bg-[#e67e22] text-white rounded-full text-xl hover:opacity-80">My Story</a>
            <a href="#summary" className="inline-block text-center w-full mb-1 md:mb-0 md:w-auto p-3 px-8 border border-2 border-[#2980b9] text-[#2980b9] rounded-full text-xl hover:bg-[#e67e22] hover:text-white">My Projects</a>
            <a href="#career-summary" className="inline-block text-center w-full mb-1 md:mb-0 md:w-auto p-3 px-8 border border-2 border-[#2980b9] text-[#2980b9] rounded-full text-xl hover:bg-[#e67e22] hover:text-white">Career Summary</a>
          </div>
        </div>
      </div>
      <section className="bg-[#f7f7ff] text-[#636363] mb-8" id="summary">
        <div className="p-3">
          <h2 className="text-center">Summary</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="md:flex">
                <div className="w-full md:w-3/12 md:mr-5">
                  <h3 className="text-center md:text-left">HOW TO REACH ME</h3>
                  <ul className="mt-3 text-xl text-center md:text-left">
                    <li className="break-words">Cell: +62 858-8261-3820</li>
                    <li className="break-words">julian.razif@gmail.com</li>
                    <li className="break-words">Cakung, East jakarta</li>
                    <li className="break-words">Linkedin: /in/julianrazif</li>
                    <li className="break-words">GitHub: julianrazif</li>
                    <li className="break-words">GitLab: julian.razif</li>
                  </ul>
                </div>
                <div className="w-full md:w-9/12">
                  <p className="mt-4 md:mt-0 text-xl text-center md:text-left">Proven experience developing customer-focused websites using fullStack JavaScript and Java. Build products for web, and mobile app users over 3+ years. meeting the highest standards for web design, user experience, best practices, and speed. Designed and developed web applications across multiple APIs, third-party integrations, and databases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3 border shadow-lg hover:shadow-xl transition-all rounded">
                    <div className="block">
                      <h3 className="text-center md:text-left">Company Project</h3>
                      <h4 className="text-sm text-center md:text-left">DEC 2020, SEP 2021</h4>
                    </div>
                    <h4 className="text-sm mt-4 text-center md:text-left">
                      Stack: React, React Native, Java Spring Boot, PostgreSQL, MongoDB, Kafka, Redis, ServerSentEvent, WebSocket, Git, Jenkins, Docker, Helm, Kubernetes, Rancher, AWS.
                    </h4>
                  </div>
                </div>
                {/* card */}
                <a href="https://expo.io/@julianrazif/projects/julian-sugoku" target="_blank">
                  <div className="mb-8 md:mr-5">
                    <div className="p-3 border shadow-lg hover:shadow-xl transition-all rounded">
                      <div className="block">
                        <h3 className="text-center md:text-left">Sugoku</h3>
                        <h4 className="text-sm text-center md:text-left">NOV 2020</h4>
                      </div>
                      <ul className="mt-4 text-center md:text-left">
                        <li>An intuitive mobile app to hone your logic and fill your spare time.</li>
                      </ul>
                      <h4 className="text-sm mt-4 text-center md:text-left">Stack: React Native, redux, Expo.</h4>
                    </div>
                  </div>
                </a>
                {/* card */}
                <a href="https://expo.io/@julianrazif/projects/c-budget" target="_blank">
                <div className="mb-8 md:mr-5">
                  <div className="p-3 border shadow-lg hover:shadow-xl transition-all rounded">
                    <div className="block">
                      <h3 className="text-center md:text-left">C-Budget</h3>
                      <h4 className="text-sm text-center md:text-left">NOV 2020</h4>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>C-Budget is a mobile-friendly app solution for vision impaired friends to control their budget.</li>
                    </ul>
                    <h4 className="text-sm mt-4 text-center md:text-left">
                      Stack: React, React Native, Redux, Expo, Express & NodeJS, MongoDB, Mongoose, JWT, Jest, GCP (Vision API, Cloud Storage, Compute Engine).
                    </h4>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7ff] text-[#636363] mb-8" id="education">
        <div className="p-3">
          <h2 className="text-center">Education</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                {/* card */}
                <a href="https://www.hacktiv8.com/" target="_blank">
                  <div className="mb-8 md:mr-5">
                    <div className="p-3">
                      <div className="block">
                        <h3 className="text-center md:text-left">HACKTIV8 INDONESIA</h3>
                        <h4 className="text-sm text-center md:text-left">AUG. 2020 TO NOV. 2020</h4>
                      </div>
                      <ul className="mt-4 text-center md:text-left">
                        <li>Enrolled since Aug. 2020 to Nov. 2020.</li>
                        <li>Learn full-stack JavaScript web development.</li>
                      </ul>
                      <h4 className="text-sm mt-4 text-center md:text-left">Immersive full stack JavaScript.</h4>
                    </div>
                  </div>
                </a>
                {/* card */}
                <a href="https://www.pnp.ac.id/" target="_blank">
                  <div className="mb-8 md:mr-5">
                    <div className="p-3">
                      <div className="block">
                        <h3 className="text-center md:text-left">Politeknik Universitas Andalas (PNP)</h3>
                        <h4 className="text-sm text-center md:text-left">AUG. 2020 TO NOV. 2020</h4>
                      </div>
                      <ul className="mt-4 text-center md:text-left">
                        <li>Diploma, Computer Engineering GPA - 3.05.</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7ff] text-[#636363] mb-8" id="career-summary">
        <div className="p-3">
          <h2 className="text-center">Career Summary</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left break-words">Senior Developer</h3>
                      <h4 className="text-sm text-center md:text-left">Dec 2020 to Aug 2022</h4>
                      <h4 className="text-sm text-center md:text-left">PT. Trix Studio Games</h4>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>Developed the applications</li>
                    </ul>
                  </div>
                </div>
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left break-words">IT & System Developer</h3>
                      <h4 className="text-sm text-center md:text-left">Feb 2020 to Jun 2020</h4>
                      <h4 className="text-sm text-center md:text-left">PT. CKD Trading Indonesia</h4>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>Installed and configured the computer hardware, software, and systems.</li>
                      <li>Designed the software and systems to help work more efficiently.</li>
                      <li>Integrated the data from several systems and databases.</li>
                      <li>Developed the JavaScript applications (Kintone).</li>
                    </ul>
                  </div>
                </div>
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left">IT Supervisor</h3>
                      <h4 className="text-sm text-center md:text-left">Jun. 2019 to Dec 2019</h4>
                      <h4 className="text-sm text-center md:text-left">PT. Kaneka Foods Indonesia</h4>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>Successfully implemented ERP systems (MCFrame, ProPlus, MES).</li>
                      <li>Successfully implemented IT infrastructure in the new factory.</li>
                      <li>Realized excellent IT operations.</li>
                    </ul>
                  </div>
                </div>
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left">System Engineering</h3>
                      <h4 className="text-sm text-center md:text-left">Sep. 2014 to Feb 2018</h4>
                      <h4 className="text-sm text-center md:text-left">PT. Berlian Sistem Informasi</h4>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>Monitor and maintain systems and networks. Provide support for IT.</li>
                      <li>Worked continuously on a task until completion (or referral to third parties, if appropriate).</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f7f7ff] text-[#636363] mb-8" id="professional-skills">
        <div className="p-3">
          <h2 className="text-center">Professional Skills</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left break-words">Coding Languages</h3>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>JavaScript more than 1+ years of experiences, Java more than 3+ years of experiences.</li>
                    </ul>
                    <h4 className="text-sm mt-4 text-center md:text-left">JavaScript, Java.</h4>
                  </div>
                </div>
                {/* card */}
                <div className="mb-8 md:mr-5">
                  <div className="p-3">
                    <div className="block">
                      <h3 className="text-center md:text-left break-words">Frameworks/Libraries/Systems</h3>
                    </div>
                    <ul className="mt-4 text-center md:text-left">
                      <li>I have developed many applications with many frameworks, libraries, and using many systems.</li>
                    </ul>
                    <h4 className="text-sm mt-4 text-center md:text-left">React, React Native, Vue, NodeJS, Express, Sequelize, GraphQL, Apollo Server, Socket.io, Java Spring Boot, Kafka, Redis, MongoDB, PostgreSQL, MSSQL, Intellij, Maven, ServerSentEvent, WebSocket, Git, Jenkins, Docker, Helm, Kubernetes, Rancher, MVC, Stream, SPA, RestAPI, Microservices, DevOps.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}