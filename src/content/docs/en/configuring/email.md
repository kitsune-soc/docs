---
title: Email Verification
description: Configuring email verification for Kitsune
---

This page documents the email verification functionality of kitsune & how to set it up.

## Example:

This configuration must be placed in the section of the config file where URL & Storage are positioned.

Now the example:

```dhall
, storage =
, email = Some { from_address = "kitsunemailer@joinkitsune.org", host = "your.smtp.host", username = "admin", password = "password" }
, url = Some {}
```
There is also an option config you can place in front of "from_address" if your email service provider does not do TLS over 465 and instead uses 587(STARTTLS).
Here is an example configuration utilizing starttls:

```dhall
, storage =
, email = Some { starttls = True, from_address = "kitsunemailer@joinkitsune.org", host = "your.smtp.host", username = "admin", password = "password" }
, url = Some {}
```

Now going over it in a bit more detail.


```starttls``` :
By default Kitsune users the port 465 to send mail. Most service providers also use this port, but some(for example postmark) use the port 587. 

```from_address``` :
This is the address kitsune uses to send mail

```host``` : 
This is the domain that your smtp server is hosted on.

```username, password``` :
The password and username of your smpt server. This could also be an key of some kind, both should work. 
Currently REST API is not supported.