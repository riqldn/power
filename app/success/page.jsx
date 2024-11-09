import Link from 'next/link'
import NavBar from '../components/NavBar'
export default function page() {
    return (<>
<NavBar></NavBar>
        <div className='h-screen w-full flex flex-col align-center text-center place-center justify-center'><h1 className='text-4xl text-primary'> Your Message was successfully sent!</h1> <Link className="font-semibold" href='/'>Back to Homepage</Link></div>
    </>

    )
}
