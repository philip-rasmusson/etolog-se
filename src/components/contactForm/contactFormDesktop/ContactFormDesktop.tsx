import './ContactFormDesktop.css'

export const ContactForm = () => {
  return (
    <div className="contact-form-desktop-wrapper">
      <form className="contact-form-desktop" action='/contact'>
        <label>Ditt namn</label><input />
        <label>Företagetsnamn</label><input /><br />
        <label>Email</label><input />
        <label>Telefonnummer</label><input /><br />
        <label>Typ av verksamhet</label><input />
        <label>Ort</label><input /><br />
        <label>Kort beskrivning av vad du vill ha hjälp med</label><input /><br />
        <input type="submit" value="Skicka" />
        <input type="reset" value="Rensa" />
      </form>
    </div>
  )
}