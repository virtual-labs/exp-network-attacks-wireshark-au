<h3>Theory</h3>

<u><h4>Network Attacks using Wireshark</h4></u>

<p>
Wireshark is a powerful, open-source network protocol analyzer that captures and displays data packets flowing through a network in real time. It is used by network administrators, security analysts, developers, and forensic investigators for a wide range of tasks including network troubleshooting, performance monitoring, protocol analysis, and security auditing.
</p>

<u><h5>1. Packet Analysis</h5></u>
<p>


Wireshark allows users to open and analyze .pcap (packet capture) files, which contain recorded network traffic. By examining the headers and payloads of individual packets, users can identify abnormal behaviors, communication patterns, and potential security threats within the network.
</p>

<u><h5>2. Plaintext Password Detection</h5></u>
<p>
In networks where protocols such as HTTP, FTP, or Telnet are used without encryption, sensitive information like usernames and passwords can be transmitted in plaintext. Wireshark can capture and display these credentials using filters like <code>http.authbasic</code> or by inspecting TCP streams manually.
</p>

<u><h5>3. DNS Anomalies</h5></u>
<p>
DNS (Domain Name System) is responsible for resolving domain names to IP addresses. Attackers can exploit DNS for tunneling, spoofing, or data exfiltration. By using filters such as <code>dns</code> and analyzing unusual domain requests or excessive DNS queries, Wireshark helps in detecting DNS-related anomalies.
</p>

<u><h5>4. SYN Flood Attack Detection</h5></u>
<p>
A SYN flood is a type of Denial of Service (DoS) attack where an attacker sends a large number of TCP SYN packets without completing the handshake. This exhausts server resources and can make services unavailable. Wireshark can detect this pattern using the filter <code>tcp.flags.syn == 1 and tcp.flags.ack == 0</code> to isolate SYN-only packets.
</p>

<u><h5>5. ARP Poisoning</h5></u>
<p>
ARP (Address Resolution Protocol) poisoning is a form of attack where an attacker sends fake ARP messages onto a local network, linking their MAC address with the IP address of another host. This can allow them to intercept, modify, or stop data meant for that IP. Wireshark can help detect this by filtering <code>arp</code> packets and looking for suspicious changes or duplicate IP-MAC pairings.
</p>

<u><h5>6. Xmas Scan</h5></u>
<p>
An Xmas scan is a network reconnaissance technique where TCP packets are sent with FIN, PSH, and URG flags all set. These packets are used to probe ports and detect which are open or closed based on the target’s response. In Wireshark, such scans can be identified using the filter <code>tcp.flags == 0x29</code>.
</p>

<u><h5>7. Importance of Network Forensics</h5></u>
<p>
By continuously monitoring and analyzing network traffic, Wireshark helps in identifying attack patterns, preventing data breaches, and performing post-incident investigations. Network forensics using tools like Wireshark is essential in building secure infrastructures and responding effectively to cybersecurity incidents.
</p>
