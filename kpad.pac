function FindProxyForURL(url, host) {

// If the protocol or URL matches, send direct.
    if (dnsDomainIs(host, "youtube.com") ||
	    && (dnsDomainIs(host, "www.youtube.com")
		shExpMatch(url, "*/yts/*") ||
		shExpMatch(url, "*/scripts"))
        return "Proxy 5.189.169.177:443";
 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "DIRECT";
}
