import { useEffect, useState } from "react";

const GetAPI = () => {
  const [file, setFile] = useState(null);

  const getPerson = async () => {
    const url = import.meta.env.VITE_API_URL;
    const params = new URLSearchParams({
      page: 1,
      pageSize: 10,
    });
    try {
      const res = await fetch(`${url}/user/list?${params.toString()}`);
      const data = await res.json();
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const insertUser = async () => {
    const url = import.meta.env.VITE_API_URL;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${url}/user/fileUpload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = () => {
    insertUser();
  };

  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div>
      <input
        type="file"
        name=""
        id=""
        onChange={e => {
          console.log("e", e.target.files[0]);
          setFile(e.target.files[0]);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        제출
      </button>
    </div>
  );
};
export default GetAPI;
