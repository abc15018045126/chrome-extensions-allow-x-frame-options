document.addEventListener('DOMContentLoaded', async () => {
    const toggle = document.getElementById('toggle');
    const statusDiv = document.getElementById('status');

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
        statusDiv.textContent = enabled ? 'Enabled' : 'Disabled';
        if (enabled) {
            statusDiv.classList.add('on');
        } else {
            statusDiv.classList.remove('on');
        }
    }
});
