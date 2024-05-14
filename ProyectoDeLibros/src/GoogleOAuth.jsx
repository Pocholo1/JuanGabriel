import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode"


export default function GoogleOAuth() {
    const cookies = new Cookies()
  return (
    <div>
        <GoogleOAuthProvider clientId='822815834806-cghelpm10n8d530vspnct39ksd2iom9r.apps.googleusercontent.com'>
            <GoogleLogin
            onSuccess={credentialResponse =>{
                const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                cookies.set('email',credentialResponseDecode.email,{
                    secure: true,
                    sameSite: 'None',
                    path: '/'
                })
                //console.log(CredentialResponse);
                cookies.set('nombre',credentialResponseDecode.name,{
                    secure: true,
                    sameSite: 'None',
                    path: '/'
                })
                window.location.hash = '/sesionIniciada'
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
        </GoogleOAuthProvider>
      
    </div>
  )
}