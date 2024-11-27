export default function Socials() {
  const socials = [
    {
      icon: "/icons/github.svg",
      link: "https://github.com/Super-Kenneth",
      name: "Super-Kenneth",
    },
    {
      icon: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/in/kenneth-manuel-07a8bb30a/",
      name: "Kenneth Manuel",
    },
    {
      icon: "/icons/facebook.svg",
      link: "https://www.facebook.com/kenneth.manuel.1219/",
      name: "Kenneth Manuel",
    },
    {
      icon: "/icons/instagram.svg",
      link: "https://www.instagram.com/knnth_mnl/",
      name: "knnth_mnl",
    },
  ];
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2  gap-4 p-4">
      {socials.map((social, index) => (
        <div key={index} className=" border flex flex-row rounded-xl p-2">
          <div className=" flex flex-row items-center gap-x-2 w-[70%]">
            <img src={social.icon} alt="icon" className=" h-8" />
            <p> {social.name}</p>
          </div>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className=" w-[30%]"
          >
            <button className=" font-bold w-full bg-white rounded-xl text-black p-2">
              Visit
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}
