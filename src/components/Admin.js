import React from "react";
import { Navigate} from "react-router-dom";
import NavAdmin from "./halamanadmin/NavAdmin";
import { ProSidebarProvider } from 'react-pro-sidebar';


const Admin = () => {
    const tkn = localStorage.getItem('tkn')
    
    
    if(!tkn){
        return <Navigate to ="/login" />
    }

    return(
        <div>
             <ProSidebarProvider>
                <NavAdmin />
            </ProSidebarProvider> 
        </div>
    );
}

export default Admin;