import React, { useState, useEffect } from 'react';
import { getStaff } from "../constants/services"

const Employees = ({ page = "12" }) => {
  const [staff, setStaff] = useState([]);
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(async () => {
    setLoader(false);
    const result = await getStaff(page);
    if (result) {
      setStaff(result.data);
      setLoader(true);
    }
  }, [])

  const changeInput = (e) => {
    setInputName(e.target.value);
    setError(false);
  }

  const addNewStaff = () => {
    const isRepeat = staff.findIndex(elem => elem.first_name === inputName);
    if (!inputName || isRepeat !== -1) {
      setError(true);
    } else {
      setStaff(staff => [...staff, { "first_name": inputName }]);
    }
  };
  const delStaff = (delIndex) => {
    const newStaffArray = staff.filter((elem, index) => index !== delIndex);
    setStaff(newStaffArray);
  };

  return (
    <>
      {loader ? <div className="client_block">
        <div className="add_staff_block">
          <input className={error ? "error" : ""} onChange={(e) => changeInput(e)} value={inputName}></input>
          <button className="add_btn" onClick={() => addNewStaff()}>Добавить</button>
        </div>
        {staff.map((elem, index) => (<div className="client_name" key={index}>
          <div className="client_name_text">
            <p>{elem.first_name}</p>
          </div>
          <button className="del_btn" onClick={() => delStaff(index)}>Удалить</button>
        </div>)
        )
        }
      </div>
        : <div>LOADER</div>}
    </>
  );
}

export default Employees;
