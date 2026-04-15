


export default function Location() {
  return (
    <>
    <div className="flex justify-center gap-[100px]">
      <div className="flex flex-col">
        <h2>
          Besucht uns
        </h2>
        <p>We'd love to see you. Stop by for a scoop!</p>
        <ul>
          <li>
            <h4>Address</h4>
            Benediktspl. 4, 99084 Erfurt
          </li>
          <li>
          <h4>
            Öffnungszeiten
          </h4>
          <div className="flex flex-col">
          Montag – Mittwoch: 10:00 – 19:00
          Freitag – Sonntag: 10:00 – 19:00
          </div>
          </li>
        </ul>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.032787209315!2d11.027107376933293!3d50.97858457169783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a47296139fbaa9%3A0x860d7189002c5852!2sUn%20Angelo!5e0!3m2!1sen!2sde!4v1776265195343!5m2!1sen!2sde"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </>
  )
}