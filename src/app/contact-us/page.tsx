import Layout from '../layout'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us | RateXpose</title>
      </Head>
      <Header />

      <main className="mt-10 px-10 min-h-screen">
        <section>
          <h1 className="text-4xl text-center mb-10">Contact Us</h1>
          <div className="bg-purple-100 p-6 rounded-lg text-lg mb-20">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-black rounded" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-black rounded" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">Message</label>
                <textarea id="message" className="w-full p-2 border border-black rounded" rows={5} placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="bg-green-200 text-black p-2 rounded">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  )
}

export default ContactPage
