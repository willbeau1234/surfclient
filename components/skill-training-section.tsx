export function SkillTrainingSection() {
  return (
    <section className="bg-white py-20 px-8 md:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px] lg:order-1">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
              style={{
                backgroundImage: `url('/placeholder.svg?height=500&width=600')`,
              }}
            />
          </div>

          <div className="lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 font-light">Skill training</h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-black font-serif leading-relaxed">
                Want to nail a new move like snap, cutback, or floater? Dream of pulling into a barrel?
              </p>
              <p className="text-lg md:text-xl text-black font-serif leading-relaxed">
                Skill training sessions help surfers master specific goals. Improve your technique with fun,
                personalized training.
              </p>
              <p className="text-lg text-black font-serif italic">
                Private sessions available (best for intermediate to advanced surfers)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
