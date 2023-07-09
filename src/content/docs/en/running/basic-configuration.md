---
title: "Basic Configuration"
description: "Basic configuration of Kitsune"
---

Kitsune is using the [Dhall configuration language](https://dhall-lang.org/) to configure the main application to make it easy for both, Kitsune users and developers,
to add new features and make them easily configurable.  
We recommend every Kitsune administrator to make themselves familiar with basic Dhall syntax.

> The auxiliary services/CLI tools are using environment variables at the moment. 
> Note that this might change at the future.
> Example config can be found in the root directory titled "config.example.dhall", move it wherever you like and name it whatever you like. Be sure to back it up. 
(If you move it make sure to edit the "let types =" value accordingly)

The simplest Kitsune configuration looks like this:

```dhall
let types = ./kitsune/config/types.dhall
in    { cache =
            types.Cache.InMemory
          : types.Cache
      , database =
            { url = "postgres://localhost/kitsune", max_connections = 20 }
          : types.Database
      , instance =
            { name = "Kitsune"
            , description = "https://www.youtube.com/watch?v=6lnnPnr_0SU"
            , character_limit = 5000
            , federation_filter =
                  types.FederationFilter.Deny { domains = [] : List Text }
                : types.FederationFilter
            , registrations_open = True
            }
          : types.Instance
      , messaging = types.Messaging.InProcess
      , server =
            { frontend_dir = "./kitsune-fe/dist"
            , job_workers = 20
            , max_upload_size = 5 * 1024 * 1024
            , media_proxy_enabled = False
            , oidc = None types.Oidc
            , port = 5000
            , prometheus_port = 9000
            , request_timeout_sec = 60
            }
          : types.Server
      , search = types.Search.Sql
      , storage = types.Storage.Fs { upload_dir = "./uploads" } : types.Storage
      , url = { scheme = "https", domain = "kitsune.example.com" } : types.Url
      }
    : types.Config
```

To successfully deploy the application, make sure you **at least** change the following values to your own:

- `domain`

  - Domain of your instance. Used to build the URLs of your activities.
  - This is a *very important* setting and **cannot** be changed after the first setup.

- `database`

  - Specifically the url section. Refer to database section under configuring for proper setup.

To run the application use the following command:
```bash
./kitsune [path-to-config-file]
```

In order to read up on all the possible configurations, check out the "Configuration" section.
