document.addEventListener('DOMContentLoaded', async () => {
    const toggle = document.getElementById('toggle');
    const statusDiv = document.getElementById('status');
    const appNameTitle = document.getElementById('app_name_text');

    // Localize UI
    appNameTitle.textContent = chrome.i18n.getMessage("extensionName");

    // Load saved state
    const data = await chrome.storage.local.get(['enabled']);
    toggle.checked = !!data.enabled;
    updateStatusText(toggle.checked);

    toggle.addEventListener('change', async () => {
        const isEnabled = toggle.checked;
        updateStatusText(isEnabled);

        // Send message to background to update rules
        chrome.runtime.sendMessage({ action: 'toggle', enabled: isEnabled }, (response) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            }
        });
    });

    function updateStatusText(enabled) {
        statusDiv.textContent = chrome.i18n.getMessage(enabled ? 'statusEnabled' : 'statusDisabled');
        if (enabled) {
            statusDiv.classList.add('on');
        } else {
            statusDiv.classList.remove('on');
        }
    }
});
