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

## Meilisearch

> Enabled by:
>
> 1. Compiling Kitsune with the `meilisearch` feature flag
> 2. Adding this to your configuration:
>
> ```dhall
> search = types.Search.Meilisearch {
>     instance_url = "[URL of your Meilisearch instance]"
>   , api_key = "[API key to access your Meilisearch instance]"
> }
> ```

This instructs Kitsune to use [Meilisearch](https://www.meilisearch.com/) as the search engine. Meilisearch provides incredibly fast, high-quality full-text search.  
Meilisearch also has a cloud offering, making this the easiest high-quality search to use with Kitsune.

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
