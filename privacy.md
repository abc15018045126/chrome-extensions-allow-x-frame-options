# Privacy Policy
**Effective Date**: 2026-1-13

This privacy policy applies to the "Allow X-Frame-Options" Chrome extension (hereinafter referred to as "the Extension") developed and maintained by [ abc15018045126(xuwenjie)] (hereinafter referred to as "the Developer"). By using the Extension, you agree to the terms of this privacy policy.

## 1. Overview of the Extension
The Extension is designed to modify/override the `X-Frame-Options` HTTP response header in the Chrome browser, enabling web pages to be embedded in iframes where they would otherwise be blocked. The Extension operates entirely locally within your Chrome browser and does not interact with external servers except as necessary to fulfill its core functionality (e.g., processing HTTP responses from the websites you visit).

## 2. Data Collection and Use
### 2.1 No Personal Data Collection
The Developer does **not** collect, store, transmit, or share any personal data, including but not limited to:
- Your browsing history
- Personal identifiers (e.g., name, email address, IP address)
- Form data, cookies, or session information
- Device information (e.g., device model, operating system version)
- Any user input or interaction with the Extension (e.g., settings changes)

### 2.2 Local Data Handling
Any configuration settings for the Extension (e.g., enabling/disabling the X-Frame-Options override for specific sites) are stored **locally** in your Chrome browser's storage (Chrome's `chrome.storage` API) and are never transmitted to the Developer or any third party.

## 3. Permissions Explanation
The Extension requests the following permissions, all of which are strictly necessary to implement the core functionality of overriding `X-Frame-Options` headers:

| Permission | Purpose | Data Collection |
|------------|---------|-----------------|
| `webRequest` & `webRequestBlocking` | To intercept and modify the `X-Frame-Options` HTTP response header for the websites you visit. | No data is collected or logged; only header modification is performed locally. |
| `host_permissions` (`<all_urls>`) | To apply the X-Frame-Options header modification to all web pages you access in Chrome. | No data is collected from the URLs; permission is only used to target relevant pages for core functionality. |
| `storage` | To save your local configuration settings (e.g., sites where the extension is enabled/disabled). | Data is stored locally only; no transmission to external parties. |

## 4. Third-Party Services
The Extension does **not** integrate with any third-party services (e.g., analytics tools, advertising networks, cloud storage services) that may collect data about you.

## 5. Data Storage
Since no personal data is collected by the Extension, there is no data storage on external servers. Local configuration data stored in your browser is under your full control and can be deleted at any time by uninstalling the Extension or clearing your browser's extension data.

## 6. Children's Privacy
The Extension is not intended for use by children under the age of 13. The Developer does not knowingly collect any data from children, and the Extension’s functionality does not target or appeal to children. This Extension is intended for technical/development use only and is not designed for general consumer use by children.

## 7. Changes to This Privacy Policy
The Developer may update this privacy policy from time to time. Any changes will be posted on the Extension’s GitHub repository (https://github.com/abc15018045126/chrome-extensions-allow-x-frame-options) with a revised effective date. Continued use of the Extension after changes are posted constitutes your acceptance of the updated policy.

## 8. Contact Information
If you have any questions, concerns, or requests regarding this privacy policy or the Extension’s data practices, please contact the Developer via:
- GitHub Issues: https://github.com/abc15018045126/chrome-extensions-allow-x-frame-options/issues

---
This privacy policy is designed to comply with the Chrome Web Store Developer Program Policies and applicable data protection regulations (e.g., GDPR, CCPA).