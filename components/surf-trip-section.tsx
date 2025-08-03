export function SurfTripSection() {
  return (
    <section className="bg-white py-20 px-8 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 font-light">Surf Trip</h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-black font-serif leading-relaxed">
                Craving uncrowded waves and a deeper connection to Indonesia's rich culture? Our surf adventures go
                beyond Bali, guiding you to remote coastlines and hidden gems.
              </p>
              <p className="text-lg md:text-xl text-black font-serif leading-relaxed">
                Whether you're after a single-day escape or a multi-day mission, we've got you covered.
              </p>
              <p className="text-lg text-black font-serif italic">
                Private and group sessions available (best for intermediate to advanced surfers)
              </p>
            </div>
          </div>

          <div className="relative h-96 lg:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=500&width=600')`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
