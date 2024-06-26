const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');

(async () => {
    
    let sendMessage = async () => {
        let msteams_webhook = core.getInput('webhook');
        let msteams_title = core.getInput('title');
        let msteams_subtitle = core.getInput('subtitle');
        let msteams_color = core.getInput('color');
        let msteams_message = core.getInput('message');

        let body = {
            "@type": "MessageCard",
            "@context": "http://schema.org/extensions",
            "themeColor": msteams_color,
            "title": msteams_title,
            "text": msteams_subtitle,
            "sections": [
                {
                    "facts": [
                        {
                            "name": "",
                            "value": msteams_message
                        }
                    ]
                }
            ]
        };

        let response = await fetch(msteams_webhook, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    try {
        let response = await sendMessage(msteams_webhook, msteams_title, msteams_subtitle, msteams_color, msteams_message);

        if (response) {
            core.setOutput('response', response);
        } else {
            core.setFailed(`Failed to send message: ${response.message}`);
        }
    } catch (error) {
        core.setFailed(error.message);
    }

})();