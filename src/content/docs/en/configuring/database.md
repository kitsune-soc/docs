---
title: "Database"
description: "Kitsune Database Configuration"
---

The choice of database depends on your requirements and possibly already available environment. 
In general, we recommend using [PostgreSQL](https://postgresql.org/).  
There is no manual step for applying migrations; database migrations are automatically applied when starting Kitsune up.

## Supported databases

- PostgreSQL

    - Recommended for most users
    - Tested locally by the developers

- SQLite

    - Recommended for small low-traffic instances
    - Runs in our CI

- MySQL/MariaDB

    - Should *technically* work
    - Untested; therefore not recommended for production

## Database URL structure

```
[DBMS]://[Username]:[Password]@[DBMS host]:[Port]/[Database name]
```

## Maximum connections

The `max_connections` setting defines how many connections the globally shared connection pool will open to the database server *at maximum*.  
What you should set this value to depends on many factors.

> We currently do not report any pool metrics via the Prometheus endpoint. This might be added in the future.
