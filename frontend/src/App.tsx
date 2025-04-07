// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AuthCallBackPage from "./pages/AuthCallBackPage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/chat/ChatPage"
import AlbumPage from "./pages/album/AlbumPage"
import {Toaster} from "react-hot-toast"
import AdminPage from "./pages/admin/AdminPage"
import NotFoundPage from "./pages/404/NotFoundPage"



function App() {

  return (
    <>
      <Routes>
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />} />
        <Route path="/auth-callback" element={<AuthCallBackPage />} />
        <Route path="/admin" element={<AdminPage/>}/>
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/albums/:albumId" element={<AlbumPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
     </Routes>
      <Toaster/>

    </>

  )
}

export default App

{/* <header>
<SignedOut>
  <SignInButton>
    <Button>SignIn </Button>
  </SignInButton>
</SignedOut>
<SignedIn>
  <UserButton />
</SignedIn>
</header> */}