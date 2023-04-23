---
title: "Storage"
description: "Configure Kitsune's media storage"
---

As a microblogging platform, Kitsune also offers users the ability to attach images, videos, and audio to their posts. 
We offer multiple different storage backends to store the attachments to.

> **Note**: You might want to increase the upload limit by tweaking the `max_upload_size` parameter in your configuration; the number is the upload limit in bytes. 
> The default set by the example configuration is 5MiB.

## File System

This is recommended for small instances.  
Kitsune simply stores the media inside a user-defined directory on the local file system.

In order to enable this, add this to your configuration:

```dhall
storage = types.Storage.Fs {
    upload_dir = "path/to/upload/directory"
}
```

This will then place all the uploads into the specified directory.

## S3-compatible storage

When your user count increases (or your requirements change), you might want to consider using an S3-compatible storage solution to store all your media attachments.

In order to make this happen, add this to your configuration:

```dhall
storage = types.Storage.S3 {
      bucket_name = "[Name of your bucket]"
    , endpoint_url = "[URL of the endpoint]"
    , region = "[Region of your S3 storage]"
    , force_path_style = False 
    , access_key = "[Access Key]"
    , secret_access_key = "[Secret Access Key]"
}
```

### Bucket Name

This setting is pretty self-explanatory. It's the name of the bucket you created and want your attachments to be put in.

### Endpoint URL

The URL of the S3 endpoint. You can either get this from your storage provider's dashboard or documentation; really depends on the provider.

### Region

The S3 region in which you created the bucket. The value of this might be different from provider to provider.

### Force Path Style

Some S3 storage providers don't support the virtual-hosted request style. If your provider is one of those, set this setting to `True` to instruct Kitsune to use the legacy path style.

### (Secret) Access Key

These keys are given to you when creating your bucket. Make sure you keep these private!

### Notes on "get_object" requests

Currently Kitsune proxies all the S3 accesses, meaning each media access results in a "get object" request.  
For example, Cloudflare R2 has a "no egress fee policy" which, due to this implementation detail, doesn't apply to Kitsune.

> This is not final, we might change how S3 uploads are handled

### Migrating from file-system storage to S3

The migration is pretty simple. Upload all the files from your upload directory into the S3 bucket (while preserving the same file hirearchy) and change the configuration.  
Kitsune should then serve the files without any problems.
