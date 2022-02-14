import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <SideBar/>
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </div>
  );

}

export default MyApp
