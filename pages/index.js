import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    <script
src='//in.fw-cdn.com/30730360/392142.js'
chat='true'>
  // Copy the below lines under window.fcWidget.init inside fw_chat_widget function in the above snippet

// To set unique user id in your system when it is available
window.fcWidget.setExternalId("john.doe1987");

// To set user name
window.fcWidget.user.setFirstName("John");

// To set user email
window.fcWidget.user.setEmail("john.doe@gmail.com");


</script>

      <Footer />
    </div>
  )
}
