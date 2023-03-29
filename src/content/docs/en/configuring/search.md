---
title: Search
description: Configuring Kitsune's search features
---

Kitsune has a number of search backends, each different from the other, to best fit your specific needs. 
We want to give you a brief overview over the available backends.

## No Search

> Enabled by setting the search property in your configuration to `types.Search.None`

This completely disables the search on your instance. Finding posts and accounts is now only possible via direct links and handles.

## SQL-based Search

> Enabled by setting the search property in your configuration to `types.Search.Sql`

This runs searches on your database directly. The quality is somewhat low but still acceptable.

## Custom Search Service

> Enabled by adding this to your configuration:
> 
> ```dhall
> search = types.Search.Kitsune {
>     index_server = "[URL to your index server]"
>   , search_servers = ["[URLs to your search servers]"] 
> }
> ```

This setting utilises the custom Kitsune search service. This will likely be faster than your SQL-based search and makes searches typo-tolerant.
