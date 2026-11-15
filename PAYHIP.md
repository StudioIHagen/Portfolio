# Payhip setup

Backup: `backup/before-payhip-2026-11-15`.

1. Create a digital product in Payhip and upload the paid file there. Do not upload the paid file to this public GitHub repository.
2. Choose the price and currency in Payhip and connect your payment provider.
3. Copy the product identifier from https://payhip.com/b/PRODUCT_ID.
4. In assets/resources.js set payhip.productId to that identifier, payhip.priceLabel to the matching display price (for example "149 NOK"), and payhip.enabled to true.
5. Publish and verify a purchase and file delivery through Payhip before announcing sales.

The Buy link opens Payhip's direct checkout at https://payhip.com/buy?link=PRODUCT_ID. Payhip is the authority for price, payment and file delivery. The website priceLabel is display text only and must be kept in sync. No payment secrets are needed in the website.

Paid products never render the public Download link. Free resources without a payhip field can still use download. Disabling a resource's payhip.enabled disables purchases on this website; manage product availability in Payhip separately.

Until configured the button is disabled, price is unannounced, and no checkout is opened.
