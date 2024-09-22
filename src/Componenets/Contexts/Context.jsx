import React, { createContext, useContext, Children ,useState} from "react";

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export default function ContextProvider({ children }) {
const [day, setDay] = useState(true);
const [open, setOpen] = useState(false);
const handleBckground = () => {
  const doc = document.body;
  if (day) {
    doc.classList.add("day");
    doc.classList.remove("night");
  } else {
    doc.classList.remove("day");
    doc.classList.add("night");
  }
};
const openModal=()=>{
  document.body.classList.add('modal-opens')
}
const closeModal=()=>{
 document.body.classList.remove('modal-opens')
}
 

const handleToggle = () => {
  setDay((prev) => !prev);
  handleBckground();
};
 
 const handleModal = () => {
   setOpen(true);
    openModal()
 };
 const deleteModal=()=>{
  setOpen(false)
  closeModal()
 }


  const contxtValues = {
    day,
    setDay,
    handleToggle,
    open,
    handleModal,
    deleteModal,

  };

  return (
    <MyContext.Provider value={contxtValues}>{children}</MyContext.Provider>
  );
}
