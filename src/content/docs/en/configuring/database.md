---
title: "Database"
description: "Kitsune Database Configuration"
---

Kitsune requires a PostgreSQL installation that it can connect to since we make usage of Postgres-specific features, such as their full-text search.

> We supported SQLite in the past (before v0.0.1-pre.1), but the support has been dropped due to a high maintenance burden and rather little expected usage.

## Database URL structure

```
postgres://[Username]:[Password]@[DBMS host]:[Port]/[Database name]
```

## Maximum connections

The `max_connections` setting defines how many connections the globally shared connection pool will open to the database server *at maximum*.  
What you should set this value to depends on many factors.

> We currently do not report any pool metrics via the Prometheus endpoint. This might be added in the future.
