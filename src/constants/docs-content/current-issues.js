export const issuesContent = {
    issues: {
        title: "Current Issues",
        blocks: [
            {
                type: "text",
                content: "This section tracks currently known issues and their status."
            },
            {
                type: "note",
                title: "Windows/Mac Installation",
                content: "You may receive an 'Unregistered Developer' warning when installing or running the app. This is a known issue as we are currently in the process of acquiring code signing certificates."
            },
            {
                type: "list",
                items: [
                    "[Mac] App needs to be opened via terminal or context menu on first run",
                    "[Windows] SmartScreen might block execution"
                ]
            },
            {
                type: "text",
                content: "If you encounter any other bugs, please report them on our [GitHub Issues page](https://github.com/mascanho/RustySEO/issues)."
            }
        ]
    }
};
