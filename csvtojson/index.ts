import convert from './csvToJson';
import fs from 'fs';
import util from 'util';

let output = convert(
    `
Titel;Type;Instruction;Format;Answers
Binary;General;How many numbers fit in the binary space?;Number,Power2;1,2,2,4,3,8,4,16,5,32,6,64,7,128,8,256,9,512,10,1024,11,2048,12,4096,13,8192,14,16384,15,32768,16,65536
Subnets;General;How many hosts are available in each subnet?;Slash,Hosts;/30,2,/29,6,/28,14,/27,30,/26,62,/25,126,/24,254,/23,510,/22,1022,/21,2046,/20,4094
MPLS;Header;What are the header items and how many bits are they?;Label,Bits;total,32,label,20,traffic class,3,bottom of stack,1,time to live,8
Administrative distance;Routing;What routing type has the follow AD?;AD,Type;0,directly connected,1,static,2,NDP,5,EIGRP summary route,20,eBGP,90,EIGRP internal,110,OSPF,115,IS-IS,120,RIP,170,EIGRP external,200,iBGP,254,DHCP,255,unknown
Well known port numbers;General;What are the correct port, transport, protocol combinations?;Port,Transport,Protocol;22,TCP,SSH,23,TCP,Telnet
VPNv4;Header;What are the header items and how many bits are they?;Label,Bits;total,96,route distinguisher,64,ipv4 prefix,32
BGP 2-byte ASN numbers ;Routing;What are the BGP 2-byte ASN number ranges;Type,Start@-Stop@;reserverd,0,public,1-64495,transition to 4-byte ASN,23456,documentation,64496-64511,private,64512-65534,reserver,65535
OSI model;General;What are the layers of the OSI model?;Layer,Name;1,Pysical,2,Data-Link,3,Network,4,Transport,5,Session,6,Presentation,7,Application
TCP/IP model;General;What are the layers of the TCP/IP model?;Layer,Name;1,Pysical,2,Data-Link,3,Network,4,Transport,5,Application
Protocol data units;General;What is the PDU name at each of these layers of the OSI model?;Layer,Name;1,Bits,2,Frames,3,Packets,4,Segments,5-7,Data
Banners;General;What are the different types of banners in Cisco IOS?;Name;MOTD,Login,Exec,Incoming
Troubleshoot link / protocol state;Switching;What does the Link / Protocol state of an interface tell you?;Look at,Link,Protocol;CLI shut,Admin down,down,L1,down,down,L2,up,down,L3,up,up
ICMP types;Wireshark;What are the moest common ICMP types?;Type,Description;0,echo reply,3,destination unreachable,5,redirect,8,icmp echo request
ICMP codes;Wireshark;What are the moet common ICMP codes?;Type,Description;0,network unreachable,1,destination unreachable
Protocol numbers;Wireshark;What are the most common protocol numbers?;Number,Protocol;1,ICMP,2,IGMP,6,TCP,17,UDP,41,6to4 tunnel,47,GRE,50,IPSEC (ESP),51,IPSEC (AH),88,EIGRP,89,OSPF,112,VRRP
Port-security;Switching;Yes or No -> what happened for each action per port-security mode?;Mode,Discard,Syslog,Counter,Error-disable;protect,yes,no,no,no,restrict,yes,yes,yes,no,shutdown,yes,yes,yes,yes
Logging;General;Name the different logging levels;Level,Name;0,emergencies,1,alerts,2,critical,3,error,4,warnings,5,notifications,6,informational,7,debugging
STP path cost (802.1D-1998) ;Switching;For each interface type - what is the short path cost?;Interface,Cost;Ethernet (10 Mbps),100,FastEthernet (100 Mbps),19,1 Gbps,4,10 Gbps,2,100 Gbps,1,1 Tbps,1,10 Tbps,1
STP path cost (802.1D-2004);Switching;For each interface type - what is the long path cost?;Interface,Cost;Ethernet (10 Mbps),2000000,FastEthernet (100 Mbps),200000,1 Gbps,20000,10 Gbps,2000,100 Gbps,200,1 Tbps,20,10 Tbps,2
EIGRP named mode;Routing;What are the three sub-modes of EIGRP named mode?;number,Sub-mode;1,Address family,2,AF interface,3,AF topology base
EIGRP named AF sub-mode;Routing;What features are found in EIGRP named sub-mode AF?;number,Feature;1,network,2,stub,3,router-id
EIGRP named AF int sub-mode;Routing;What features are found in EIGRP named sub-mode AF int?;number,Feature;1,bandwidth & delay,2,authentication,3,passive-interface,4,split-horizon
EIGRP named AF tb sub-mode;Routing;What features are found in EIGRP named sub-mode AF tb?;number,Feature;1,variance,2,max-paths,3,redistribute,4,auto-summary
IPv6 well-known addresses;General;What are some well-known IPv6 addresses?;purpose,IPv6;All IPv6 nodes,FF02::1,All IPv6 routers,FF02::2,All OSPF routers,FF02::5,OSPF all DR routers,FF02::6,RIPv2,FF02::9,EIGRP,FF02::A,DHCP relay,FF02::1:2,DHCP servers (site scope),FF05::1:3,All NTP servers,FF05::101
IPv4 well-known addresses;General;What are some well-known IPv4 addresses?;purpose,IPv4;All IPv4 nodes,Subnet broadcast address,All OSPF routers,224.0.0.5,OSPF all DR routers,224.0.0.6,RIPv2,224.0.0.9,EIGRP,224.0.0.10,LDP hello,224.0.0.2
Maximum integer values;General;What are the inifinity values of the following?;technology,infinity;EIGRP infinity,2^32-1,RIP infinity,16,BGP weight,2^16-1,BGP loc pref,2^32-1,BGP MED,2^32-1,EVN tag,2^12-2
IPv6 address types;General;What prefix belongs to each IPv6 address type?;type,prefix;Global unicast,2000::/3,Unique local,FC00::/7,Link-local,FE80::/10,Site local,FEC0::/10,Unspecified,::/128,Loopback,::1/128,Solicited node multicast,FF02::1:FF/104 (last 6 hex from link local IPv6)

`,
    'DB_8jan2022.csv'
);

fs.writeFileSync(__dirname + '/data.json', JSON.stringify(output));

const data = fs.readFileSync(__dirname + '/data.json');

const dataJson = JSON.parse(data.toString());

console.log(util.inspect(dataJson, false, 10));
