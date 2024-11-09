import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
export default function Contact() {
    var errorMessage = '';
     
    async function handleSubmit(e) {
        
        e.preventDefault();
        console.log('hello')
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "e5b8b301-484d-4b13-99c7-09a94473830f",
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            redirect('/success')
        }
    }
    
 
 
    return (
    <div className="contact-section left-0 lg:sticky px-2 md:px-0 lg:top-24 w-full lg:mt-80 md:min-h-[40vh] lg:min-h-[80vh]">
    <form  onSubmit={handleSubmit} id="contact" className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-6 justify-evenly w-full ">
        <label className="inline-block font-halenoir font-bold w-full md:w-1/2 grow-0 shrink-0" htmlFor="name">
          <div>Name</div>
          <input
            placeholder="Your name"
            name="name"
            className="outline outline-stroke rounded-md p-2 w-full md:w-11/12"
            id="first-name"
            type="text"
            required
          />

        </label>
        <label className="inline-block w-full md:w-1/2 grow-0 shrink-0" htmlFor="email">
          <div>Email</div>
          <input
            placeholder="example@outlook.com"
            name="email"
            className="outline outline-stroke rounded-md p-2 w-full md:w-11/12"
            id="email"
            type="email"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <div>Phone</div>
          <input
            name="phone"
            placeholder="+1 (123)-456-7890"
            className="outline outline-stroke rounded-md w-full p-2 "
            id="phone"
            type="phone"
            required
          />
        </label>
      </div>

      <div>
        <label>
          <div>Message</div>
          <textarea
            placeholder="Message"
            rows="5"
            name="message"
            className="outline outline-stroke rounded-md w-full p-2 w- p-1 "
            id="message"
            type="text"
            required
          />
        </label>

      </div>
      <button type="submit" className="btn w-fit rounded-md text-white">Submit</button>
      <span>{errorMessage}</span>
    </form>
  </div>
  )
}
