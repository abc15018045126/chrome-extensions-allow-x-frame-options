# Allow X-Frame-Options

A lightweight, modern browser extension that allows you to load content in iframes that are usually blocked by `X-Frame-Options` or `Content-Security-Policy` headers.

## Features

- **Header Stripping**: Automatically removes `X-Frame-Options`, `Frame-Options`, and `Content-Security-Policy` (frame-related) headers.
- **Toggle Control**: Easy-to-use popup to enable or disable the functionality on the fly.
- **Localization**: Supports English and Chinese (automatically adapts to your browser language).
- **Clean Design**: Premium, Fluent-inspired UI for a seamless experience.
- **Manifest V3**: Built with the latest Chrome/Edge extension standards for better security and performance.

## Installation

### From Microsoft Edge Add-ons Store
*Link coming soon...*

### For Developers (Manual Load)
1. Download or clone this repository.
2. Open Microsoft Edge and navigate to `edge://extensions`.
3. Toggle the **Developer mode** switch (bottom left).
4. Click **Load unpacked**.
5. Select the `allow-x-frame-options` folder from this repository.

## How to Use

1. **Click the Extension Icon**: Open the popup by clicking the extension icon in your toolbar.
2. **Toggle the Switch**: Flip the switch to **Enabled**.
3. **Badge Indicator**: 
   - `ON`: The extension is active and stripping headers.
   - `OFF`: The extension is inactive.
4. **Reload the Page**: Once enabled, reload any page containing an iframe that was previously blocked. It should now load correctly.

## Why use this?

Many websites prevent themselves from being embedded in iframes for security reasons (Clickjacking protection). However, for development, testing, or personal dashboarding, you might occasionally need to bypass these restrictions. This extension provides a safe and easy way to do so without manually configuring proxy servers.

## Security Note

**Use with caution.** Removing security headers like `X-Frame-Options` can make you vulnerable to clickjacking attacks if used on untrusted sites. It is recommended to keep the extension **Disabled** when not actively using it for a specific task.

## License

MIT License - feel free to use and modify!
