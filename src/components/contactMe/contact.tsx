export default function Contacts() {
  const contacts = [
    {
      img: "/icons/email.svg",
      link: "mailto:manuelkenneth1219@gmail.com",
      name: "manuelkenneth1219@gmail.com",
      title: "Email",
      send: "Send Email",
    },
    {
      img: "/icons/messenger.svg",
      link: "https://m.me/kenneth.manuel.1219",
      name: "Kenneth Manuel",
      title: "Messenger",
      send: "Message",
    },
    {
      img: "/icons/phone.svg",
      link: "tel:+639289545595",
      name: "09289545595",
      title: "Phone Number",
      send: "Contact",
    },
  ];
  return (
    <main>
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="md:h-[15%] w-full flex flex-col mb-4 items-center md:items-start"
        >
          <div className="w-full rounded-xl border h-full flex flex-col items-center gap-y-4 p-2 md:w-full md:flex-row md:p-4">
            <div className=" w-full h-full flex flex-row items-center gap-x-4">
              <img src={contact.img} alt="contact" className="h-10" />
              <div className="flex flex-col ">
                <p className="font-bold">{contact.title}</p>
                <p className="opacity-70 whitespace-nowrap">{contact.name}</p>
              </div>
            </div>
            <div className=" w-full flex justify-center md:justify-end">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-black p-3 rounded-xl font-bold md:hover:bg-opacity-50">
                  {contact.send}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
