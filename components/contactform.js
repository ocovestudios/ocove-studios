const ContactForm = () => {
    return (
        <form className="contact__form">
            <div className="contact__form-details">
                <input type='text' placeholder="NAME" />
                <input type='text' placeholder="EMAIL" />
            </div>
            <textarea type='text' placeholder="MESSAGE" className="contact__form-message" />
        </form>
    );
}

export default ContactForm;