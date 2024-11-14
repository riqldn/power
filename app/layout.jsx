import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
const halenoir = localFont({
  src: [{
    path: './fonts/HalenoirCompact-Medium.otf',
    weight: '400',
    style: 'normal'
  },
  {
    path: './fonts/Halenoir-DemiBold.otf',
    weight: '600',
    style: 'normal'
  },{
    path: './fonts/Halenoir-Bold.otf',
    weight: '700',
    style: 'normal'
  }],
  variable: '--font-halenoir'

})
export const metadata = {
  title: "Power Transportation Inc - New York's Premiere Concierge Service",
  description: "Power Transportation Inc, is New York's premiere concierge service, offering 24-hour service and a fleet of luxury vehicles.",
  keywords: ["Power Transportation Inc",
    "Concierge",
    "Car Service",
    "Airport Pickup",
    "Airport Transfer",
    "JFK",
    "La Guardia",
    "NYC Car Service",
    "Brooklyn",
    "Queens"
  ],
  metadataBase: new URL("https://powertransportation-inc.com"),
  alternates: {
    canonical: "https://powertransportation-inc.com"
  },
  openGraph:{
    title: "Power Transportation Inc - New York's Premiere Concierge Service",
  description: "Power Transportation Inc, is New York's premiere concierge service, offering 24-hour service and a fleet of luxury vehicles.",
  url: "https://powertransportation-inc.com",
  site_name: "Power Transportation Inc - New York's Premiere Concierge Service",

  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${halenoir.variable}`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
