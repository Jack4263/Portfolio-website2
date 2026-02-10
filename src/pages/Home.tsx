import phone from "../assets/place.webp";
function Home() {
  return (
    <section className="min-h-screen bg-[#1a1246] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-white text-5xl font-semibold">
              Hello, I'm Jack.
            </h1>
            <p className="text-gray-300 text-lg mt-4">
              I’m a Computer Science student who enjoys building web
              applications.
            </p>
          </div>
          <div>
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
