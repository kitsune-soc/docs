---
title: "Installation"
description: "Basic installation guide for Kitsune"
---

In the moment, the only way to install Kitsune is to compile it from source.  
Don't worry, that sounds way more scary than it actually is. In this guide we will step you through it.

## Dependencies

In order to build Kitsune, need a few dependencies. These are:

1. The Rust toolchain ([recommended installation](https://rustup.rs/))
2. Recent Protobuf compiler ([installation guide](https://grpc.io/docs/protoc-installation/))
3. (optional) PostgreSQL/MySQL as a dedicated DBMS
4. (optional) Redis for caching and its PubSub functionality

Yes, that's really it. We don't need more. Kitsune is designed to use as few native dependencies as possible to make building from source easy!

## Building

First, grab yourself a copy of the source code. You can either download the [main branch ZIP archive](https://github.com/kitsune-soc/kitsune/archive/refs/heads/main.zip) or clone it via Git. Both ways will work just fine.

> The recommended way to download the source is via Git since it makes updating and doing a rollback way easier.

To download a Git repository, just run the following command (this assumes you have [Git](https://git-scm.com/) installed):

```bash
git clone https://github.com/kitsune-soc/kitsune.git
```

> If you downloaded the ZIP, just unzip the archive

Next, move into the newly created directory and build the binaries in release mode.  
To do this run the following command:

```bash
cargo build --release
```

After the command finished there should be the following three binaries inside the `target/release` directory:

- `kitsune`: The main Kitsune application. This is the heart of the whole application.
- `kitsune-cli`: The Kitsune CLI utility. Used to give users roles and clear the job scheduler table.
- `kitsune-search`: The Kitsune search service. This service is responsible for providing the advertised fast full-text search.

That's it for the building part but before we can actually run our instance, we need to configure it first.
