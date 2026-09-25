import React, { useState } from "react";
function Crud() {
  const [name, setName] = useState("");
  const [rno, setRno] = useState(0);
  const [students, setStudents] = useState([
    {name: 'Abey', rno:1},
    {name: 'Joppan', rno:2}
  ]);

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else {
      setRno(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, { name, rno }]);
    setName("");
    setRno(0);
  };

  const handleDelete = (index)=>{
    setStudents(students.filter((student,ind)=>index!=ind))
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-2/9 m-auto mt-5"
      >
        <div className="flex justify-between items-center">
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            id=""
            value={name}
            onChange={handleChange}
            className="border-2 rounded-md px-2 py-1 border-teal-950"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="">Roll No.: </label>
          <input
            type="text"
            name="rno"
            id=""
            value={rno}
            onChange={handleChange}
            className="border-2 rounded-md px-2 py-1 border-teal-950"
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="submit"
            value="Add Student"
            className="rounded-md px-5 py-2 text-white bg-teal-950"
          />
        </div>
      </form>
      <div className="flex flex-col w-5/10 m-auto mt-5 gap-5">
        {students.map((student,index) => (
          <div className="flex justify-between items-center">
            <h2>Name: {student.name}</h2>
            <h3>Roll No.: {student.rno}</h3>
            <button className="rounded-md px-5 py-2 text-white bg-red-600"
            onClick={()=>handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Crud;