import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error(
      "Unable to initialize auth: missing required environment variables"
    );
  }

  const onRedirectCallback = (appState: any) => {
    navigate(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri,audience }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage" 
    >
      {children}
    </Auth0Provider>
  );
};
