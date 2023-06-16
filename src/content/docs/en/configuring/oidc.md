---
title: "OIDC (OpenID Connect)"
description: "Use OpenID Connect with Kitsune"
---

> This feature is gated behind the `oidc` compile-time feature

OpenID Connect (OIDC) is a technology to provide Single Sign-On (SSO) that it shared across multiple services. 
This is useful if you, for example, want to run Kitsune together with a bunch of other services and don't want to maintain multiple logins.

In order to enable OIDC for your Kitsune instance, find the `oidc` parameter inside the `server` configuration section. 
Set this parameter to the following value:

```dhall
oidc = Some {
      server_url = "[Issuer URL]"
    , client_id = "[Kitsune's Client ID]",
    , client_secret = "[Kitsune's Client Secret]"
}
```

## Server URL

This is the URL of the issuer; this setting differs between OIDC solutions. Don't worry, Kitsune won't start up if this value is invalid.

## Client ID and Secret

These values are created on the dashboard of the OIDC solution you are using. 
Kitsune needs these to obtain an access token from the OIDC server to do introspection and obtain some information about the user.

## Kitsune-specific OIDC requirements

The OIDC server **must** return the following values in the claim:

- `preferred_username`
- `email`

> Keep the preferred username field unique. The username is used to identify the user inside Kitsune's database that's getting registered.  
> This might change in the future.
