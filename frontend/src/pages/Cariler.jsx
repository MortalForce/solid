import Table from "./components/Table";
import "./styles/Cariler.css";

function Cariler() {
  const headers = [
    { key: "id", name: "ID" },
    { key: "ad", name: "Ad" },
    { key: "soyad", name: "Soyad" },
  ];
  return (
    <>
      <Table data="cariler" headers={headers} />
    </>
  );
}

export default Cariler;
