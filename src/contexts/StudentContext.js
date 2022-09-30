import React, { useState, createContext } from "react";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
    const [studentName, setStudentName] = useState();
    return (
        <StudentContext.Provider value={{ studentName, setStudentName }}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;