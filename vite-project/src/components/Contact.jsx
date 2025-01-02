import "./Contact.css"
function Contact(){

    return(
        <>
            <form className="form">
                <div className="title">Contact us</div>
               <input type="text" placeholder="Your email" className="input"/>
                    <textarea placeholder="Your message"></textarea>

                    <button>Submit</button>
            </form>
        </>
    )
}
export default Contact;