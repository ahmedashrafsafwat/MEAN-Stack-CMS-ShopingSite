const PROXY_CONFIG = [
    {
        context: [
            "/api",
            "/auth",
            "/facebook",
            "/callback"
           
        ],
        target: "http://localhost:4200",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
