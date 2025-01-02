import "./About.css"
function About() {
    return (
        <>
            <h1 className="About-Heading">About Component</h1>
            <div className="AboutBody">
                <div className="About">
                    <div className="Aboutinfo">
                        <h2 className="Aboutus">Who We Are</h2>
                        <p className="Aboutpara">
                            Welcome to <strong>ClickCart</strong>, your number one source for all your needs.
                            We’re dedicated to giving you the very best shopping experience, with a focus on
                            quality, customer service, and uniqueness.
                        </p>
                    </div>
                    <img
                        src="https://res.cloudinary.com/the-groomsman-suit/image/upload/f_jpg,h_1340,w_1624,q_auto:eco,f_auto/v1/gatsby-cloudinary/pages/index/spotlight-collection-mens-2?_a=AXAH4S10"
                        alt="About Us"
                    />
                </div>
            </div>

        </>
    )
}
export default About;