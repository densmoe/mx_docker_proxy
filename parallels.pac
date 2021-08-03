// pac for socks5 proxy
// needs to be hosted online to work with Chrome

function FindProxyForURL(url, host) {
    // *.mendix.test and *.mendixcloud.test go through Socks5 proxy
    if (shExpMatch(host, "*.mendix.test") || shExpMatch(host, "*.mendixcloud.test"))
        return "SOCKS5 10.211.55.2:1080";

    // all other requests go directly to the WWW:
    return "DIRECT";
}
