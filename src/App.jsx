import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";
import Dashboard from "./pages/Dashboard.jsx";
import Cabins from "./pages/Cabins.jsx";
import Account from "./pages/Account.jsx";
import Bookings from "./pages/Bookings.jsx";
import Users from "./pages/Users.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Settings from "./pages/Settings.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import HotToaster from "./ui/HotToaster.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      // staleTime: 60 * 1000,
    },
  }
})

function App() {

  return (
       <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={false} />
         <GlobalStyles/>
         <BrowserRouter>
           <Routes>
             <Route element={<AppLayout/>}>
               <Route index element={<Navigate replace to='dashboard'/>}/>
               <Route path='dashboard' element={<Dashboard/>}/>
               <Route path='bookings' element={<Bookings/>}/>
               <Route path='cabins' element={<Cabins/>}/>
               <Route path='users' element={<Users/>}/>
               <Route path='settings' element={<Settings/>}/>
               <Route path='account' element={<Account/>}/>
             </Route>
             <Route path='login' element={<Login/>}/>
             <Route path='*' element={<PageNotFound/>}/>
           </Routes>
         </BrowserRouter>
         <HotToaster/>
       </QueryClientProvider>
  )
}

export default App
