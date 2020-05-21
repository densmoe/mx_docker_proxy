function FindProxyForURL(url, host) { 
    if (dnsDomainIs(host, "mendix.test") || dnsDomainIs(host, "mendixcloud.test")) {
        return "PROXY localhost:3128"; return "DIRECT";
    } else {
        return "DIRECT"; 
    }
}
