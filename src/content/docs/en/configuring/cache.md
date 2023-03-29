---
title: Cache
description: Configuring cache for Kitsune
---

Computing things from scratch can be pretty expensive, that's where caching comes in.  
To best fit for your specific setup, Kitsune has multiple caching backends:

## No Cache

> Enabled by setting the cache property in your configuration to `types.Cache.None`.  

This is the simplest of all caching modes. It just doesn't cache anything at all and utilises Kitsune's no-op cache. 
Pretty much only desirable if you are debugging other caches for invalidation issues (or if you have *heavy* memory constraints and no way to get your hands on a Redis instance).

**Note**: This setting is incompatible with the OIDC feature since the OIDC service uses a cache type under the hood to keep track of login states.

## In-Memory Cache

> Enabled by setting the cache property in your configuration to `types.Cache.InMemory`

This tells Kitsune to cache data directly into its memory. The cache is bounded so it doesn't make you run out of memory.

## Redis Cache

> Enabled by settings the cache property in your configuration to:  
> `types.Cache.Redis { redis_url = "redis://[Your Redis Instance]" }`

This tells Kitsune to cache data via expiring keys into the configured Redis instance.  
This is the optimal configuration for setups where you have multiple Kitsune nodes running at the same time.
