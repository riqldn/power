import Link from "next/link"
import Logo from "../Assets/SVG/power_logo1_whiteRed.svg"
import Image from "next/image"


export default function Footer() {
  return (
    <div>
        <div className="footer p-10 bg-secondary w-full min-h-[40vh] flex justify-between flex-col">
    <div className="w-11/12 h-full gap-8 flex flex-col md:grid grid-cols-12">
        <div className="col1 col-start-1 col-end-4">
            <Image src={Logo} className="w-full h-auto" alt="white power transportation inc link" />

        </div>
        <div className="footer-link md:col-start-5 lg:col-start-7 text-sm w-full gap-4 text-left flex flex-col text-white col-end-9">
            <h3 className="text-white text-base">Forms</h3>
            <Link href=''>Terms & Conditions</Link>
            <Link href='' >Reservation Confirmation Form</Link>
            <Link href='/Authorization.pdf' target="_blank" >CC Authorization Form</Link>


        </div>
        <div className="md:col-start-9 lg:col-start-10 text-sm w-full gap-4 text-left flex flex-col text-white col-end-13">
            <h3 className="text-white text-base">Contact Us</h3>
            <Link className="underline" href='mailto:sadeprithwie@powertransportation-inc.com'>sadeprithwie@powertransportation-inc.com</Link>
            <Link href='tel:+15163516067' >Office: +1 (516)-351-6067</Link>
            <Link href='tel:+15169247760' >Office: +1 (516)-924-7760</Link>


        </div>
    </div>
    <h4 className="mt-12 text-white text-center">© 2024 Power Transportation Inc</h4>
</div>
    </div>
  )
}
