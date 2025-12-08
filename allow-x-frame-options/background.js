const RULE_ID = 1;

// Function to update rules based on state
async function updateRules(enable) {
    if (enable) {
        await chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: [RULE_ID],
            addRules: [
                {
                    id: RULE_ID,
                    priority: 1,
                    action: {
                        type: "modifyHeaders",
                        responseHeaders: [
                            { header: "X-Frame-Options", operation: "remove" },
                            { header: "Content-Security-Policy", operation: "remove" },
                            { header: "Frame-Options", operation: "remove" }
                        ]
                    },
                    condition: {
                        urlFilter: "*",
                        resourceTypes: ["sub_frame", "main_frame", "object", "xmlhttprequest"]
                    }
                }
            ]
        });
        // Set badge text
        chrome.action.setBadgeText({ text: "ON" });
        chrome.action.setBadgeBackgroundColor({ color: "#4caf50" });
    } else {
        await chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: [RULE_ID]
        });
        // Set badge text
        chrome.action.setBadgeText({ text: "OFF" });
        chrome.action.setBadgeBackgroundColor({ color: "#f44336" });
    }
}

// Initialize on install
chrome.runtime.onInstalled.addListener(async () => {
    // Default to OFF to be safe
    await chrome.storage.local.set({ enabled: false });
    await updateRules(false);
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'toggle') {
        const newState = request.enabled;
        await updateRules(newState);
        // Persist state
        await chrome.storage.local.set({ enabled: newState });
        sendResponse({ success: true });
    }
});
