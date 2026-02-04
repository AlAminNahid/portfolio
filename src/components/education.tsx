export default function Education() {
  return (
    <div id="education" className="w-full py-20">
      <div className="max-w-[1240px] mx-auto px-4">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Education
        </p>
        <h2 className="py-4">Academic Background</h2>

        <div className="mt-8 space-y-6">
          <div className="p-6 shadow-xl rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold">
              BSc in Computer Science & Engineering
            </h3>
            <p className="text-gray-600 mt-1">
              American International University–Bangladesh (AIUB)
            </p>
            <p className="text-gray-500 mt-1">2022 – Present</p>
            <p className="text-gray-500 mt-1">CGPA: 4.64 / 4.00</p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Concentrating on software development, web technologies, mobile
              development, data structures & algorithms, and machine learning
              through academic and project-based learning.
            </p>
          </div>

          <div className="p-6 shadow-xl rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-600 mt-1">Sreemongal Govt College</p>
            <p className="text-gray-500 mt-1">
              Science Background • GPA: 5.00 / 5.00
            </p>
          </div>

          <div className="p-6 shadow-xl rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-xl font-bold">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-gray-600 mt-1">
              The Buds Residential Model School & College
            </p>
            <p className="text-gray-500 mt-1">
              Science Background • GPA: 5.00 / 5.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
