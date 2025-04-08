import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"; 
import Landing from "./pages/Landing"; 
import Privacy_Policy from "./pages/policies/Privacy_Policy"; 
import NoPage from "./pages/NoPage";

import MusGroups from "./pages/MusGroups";
import Groups from "./pages/musgroupsWiki/Groups";

export default function App() {   
    return (     
    <BrowserRouter>       
        <Routes>         
            <Route path="/" element={<Layout />}>           
            <Route index element={<Landing />} />                     
            <Route path="privacy_policy" element={<Privacy_Policy />} />
            <Route path="musgroups" element={<MusGroups />} />         
            <Route path="groups" element={<Groups />} />
            <Route path="*" element={<NoPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="*" element={<NoPage />} />         
            </Route>       
        </Routes>     
    </BrowserRouter>   
        ); 
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);