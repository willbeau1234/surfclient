export function ContactInfoSection() {
  return (
    <section className="bg-white py-20 px-8 md:px-12 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-black mb-4 font-light">Hours</h3>
            <p className="text-lg font-serif text-black">
              Monday–Sunday
              <br />
              5am–6pm
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-black mb-4 font-light">Phone</h3>
            <p className="text-lg font-serif text-black">+62 881-0371-49065</p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-black mb-4 font-light">Email</h3>
            <p className="text-lg font-serif text-black">balimahalosurfcoach@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
