// const { createContext } = require("react");


// const ContextCreate = createContext();


// const AppProvider = ({ children }) => {
//     return (
//         <ContextCreate.Provider>
//             {children}
//         </ContextCreate.Provider>
//     )
// }


// export { AppProvider, ContextCreate }

import { createContext, useContext, useEffect, useState } from "react";
import { Sellerprofileget } from "../services/authservices/login_services";


const AppContextApi = createContext();




const ContextUseContextProvider = () => {
    return useContext(AppContextApi)
}


const AppContextProvider = ({ children }) => {



    const [first, setFirst] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        FirstSection();
    }, [loading])



    const FirstSection = async () => {


        const isCancelled = true;
        const data = localStorage.getItem("id");

        const fors = {
            userId: JSON.parse(data)
        }
        // setLoading(false);

        if (isCancelled) {

            if (fors) {
                const response = await Sellerprofileget(fors);

                setLoading(true);
                setFirst(response)
            }
            else {
                return null
            }


        }

        return () => {
            isCancelled = false;
        }


    }


    const datas = {
        first: first,
        FirstSection: FirstSection
    }
    return (
        <AppContextApi.Provider value={datas}>{children}</AppContextApi.Provider>
    )
}



export { AppContextApi, AppContextProvider, ContextUseContextProvider };