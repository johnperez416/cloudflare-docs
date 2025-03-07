---
pcx_content_type: concept
title: Total TLS
weight: 14
---

# Total TLS

{{<render file="_total-tls.md">}}
<br>

When issued, these certificates will have a type of **Advanced - Total TLS**.

## Reference

{{<directory-listing>}}

## Availability

Total TLS is available for domains that have purchased [Advanced Certificate Manager](/ssl/edge-certificates/advanced-certificate-manager/) and are currently using a [full DNS setup](/dns/zone-setups/full-setup/).
  
## Limitations

Because Total TLS does not issue certificates for any subdomain used by [Cloudflare Load Balancing](/load-balancing/), we recommend using other types of certificates to avoid any potential downtime.