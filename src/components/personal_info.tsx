export default function PersonalInfo() {
  const info = [
    {info_name: "Name:", details: "Kenneth C. Manuel"},
    {info_name: "Address:", details: "Poblacion, Pandi, Bulacan"},
    {info_name: "Nationality:", details: "Filipino"},
];
  return (
    <>
      {info.map((item, index) => (
        <table key={index} className=" text-[1em] md:text-[2em] text-gray-500 w-full ">
          <tbody>
            <tr>
              <td className="w-[35%] text-left">{item.info_name}</td>
              <td className="w-[65%] text-left ">{item.details}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}
