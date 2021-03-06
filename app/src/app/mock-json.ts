import { IFile } from './Interfaces';

export const obj: IFile = {
    name: 'new.csv',
    currentQuestion: 0,
    questions: [
        {
            meta: {
                title: 'Huts',
                type: 'A',
                instruction: 'Niffo',
            },
            format: ['Doe', 'Normaal', 'A', 'Niffo'],
            answers: [
                ['Krullen (Krullen)', 'Op (Op)', 'Me (Me)', 'Hoofd (Hoofd)'],
                ['En (En)', 'Ik (Ik)', 'Space (Space)', 'A (A)'],
                ['Niffo (Niffo)', 'Huts (Huts)', 'Huts (Huts)', 'Huts (Huts)'],
            ],
        },
        {
            meta: {
                title: 'a',
                type: 'b',
                instruction: 'c',
            },
            format: ['d (d)'],
            answers: [['e']],
        },
    ],
    currentQuestionInputOrDiv: [],
    input: [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
    ],
    currentQuestionColours: [],
};

export const obj2: IFile = {
    name: 'DB_8jan2022.csv',
    currentQuestion: 0,
    questions: [
        {
            meta: {
                title: 'Binary',
                type: 'General',
                instruction: 'How many numbers fit in the binary space?',
            },
            format: ['Number', 'Power2'],
            answers: [
                ['1', '2'],
                ['2', '4'],
                ['3', '8'],
                ['4', '16'],
                ['5', '32'],
                ['6', '64'],
                ['7', '128'],
                ['8', '256'],
                ['9', '512'],
                ['10', '1024'],
                ['11', '2048'],
                ['12', '4096'],
                ['13', '8192'],
                ['14', '16384'],
                ['15', '32768'],
                ['16', '65536'],
            ],
        },
        {
            meta: {
                title: 'Subnets',
                type: 'General',
                instruction: 'How many hosts are available in each subnet?',
            },
            format: ['Slash', 'Hosts'],
            answers: [
                ['/30', '2'],
                ['/29', '6'],
                ['/28', '14'],
                ['/27', '30'],
                ['/26', '62'],
                ['/25', '126'],
                ['/24', '254'],
                ['/23', '510'],
                ['/22', '1022'],
                ['/21', '2046'],
                ['/20', '4094'],
            ],
        },
        {
            meta: {
                title: 'MPLS',
                type: 'Header',
                instruction:
                    'What are the header items and how many bits are they?',
            },
            format: ['Label', 'Bits'],
            answers: [
                ['total', '32'],
                ['label', '20'],
                ['traffic class', '3'],
                ['bottom of stack', '1'],
                ['time to live', '8'],
            ],
        },
        {
            meta: {
                title: 'Administrative distance',
                type: 'Routing',
                instruction: 'What routing type has the follow AD?',
            },
            format: ['AD', 'Type'],
            answers: [
                ['0', 'directly connected'],
                ['1', 'static'],
                ['2', 'NDP'],
                ['5', 'EIGRP summary route'],
                ['20', 'eBGP'],
                ['90', 'EIGRP internal'],
                ['110', 'OSPF'],
                ['115', 'IS-IS'],
                ['120', 'RIP'],
                ['170', 'EIGRP external'],
                ['200', 'iBGP'],
                ['254', 'DHCP'],
                ['255', 'unknown'],
            ],
        },
        {
            meta: {
                title: 'Well known port numbers',
                type: 'General',
                instruction:
                    'What are the correct port, transport, protocol combinations?',
            },
            format: ['Port', 'Transport', 'Protocol'],
            answers: [
                ['22', 'TCP', 'SSH'],
                ['23', 'TCP', 'Telnet'],
            ],
        },
        {
            meta: {
                title: 'VPNv4',
                type: 'Header',
                instruction:
                    'What are the header items and how many bits are they?',
            },
            format: ['Label', 'Bits'],
            answers: [
                ['total', '96'],
                ['route distinguisher', '64'],
                ['ipv4 prefix', '32'],
            ],
        },
        {
            meta: {
                title: 'BGP 2-byte ASN numbers ',
                type: 'Routing',
                instruction: 'What are the BGP 2-byte ASN number ranges',
            },
            format: ['Type', 'Start@-Stop@'],
            answers: [
                ['reserverd', '0'],
                ['public', '1-64495'],
                ['transition to 4-byte ASN', '23456'],
                ['documentation', '64496-64511'],
                ['private', '64512-65534'],
                ['reserver', '65535'],
            ],
        },
        {
            meta: {
                title: 'OSI model',
                type: 'General',
                instruction: 'What are the layers of the OSI model?',
            },
            format: ['Layer', 'Name'],
            answers: [
                ['1', 'Pysical'],
                ['2', 'Data-Link'],
                ['3', 'Network'],
                ['4', 'Transport'],
                ['5', 'Session'],
                ['6', 'Presentation'],
                ['7', 'Application'],
            ],
        },
        {
            meta: {
                title: 'TCP/IP model',
                type: 'General',
                instruction: 'What are the layers of the TCP/IP model?',
            },
            format: ['Layer', 'Name'],
            answers: [
                ['1', 'Pysical'],
                ['2', 'Data-Link'],
                ['3', 'Network'],
                ['4', 'Transport'],
                ['5', 'Application'],
            ],
        },
        {
            meta: {
                title: 'Protocol data units',
                type: 'General',
                instruction:
                    'What is the PDU name at each of these layers of the OSI model?',
            },
            format: ['Layer', 'Name'],
            answers: [
                ['1', 'Bits'],
                ['2', 'Frames'],
                ['3', 'Packets'],
                ['4', 'Segments'],
                ['5-7', 'Data'],
            ],
        },
        {
            meta: {
                title: 'Banners',
                type: 'General',
                instruction:
                    'What are the different types of banners in Cisco IOS?',
            },
            format: ['Name'],
            answers: [['MOTD'], ['Login'], ['Exec'], ['Incoming']],
        },
        {
            meta: {
                title: 'Troubleshoot link / protocol state',
                type: 'Switching',
                instruction:
                    'What does the Link / Protocol state of an interface tell you?',
            },
            format: ['Look at', 'Link', 'Protocol'],
            answers: [
                ['CLI shut', 'Admin down', 'down'],
                ['L1', 'down', 'down'],
                ['L2', 'up', 'down'],
                ['L3', 'up', 'up'],
            ],
        },
        {
            meta: {
                title: 'ICMP types',
                type: 'Wireshark',
                instruction: 'What are the moest common ICMP types?',
            },
            format: ['Type', 'Description'],
            answers: [
                ['0', 'echo reply'],
                ['3', 'destination unreachable'],
                ['5', 'redirect'],
                ['8', 'icmp echo request'],
            ],
        },
        {
            meta: {
                title: 'ICMP codes',
                type: 'Wireshark',
                instruction: 'What are the moet common ICMP codes?',
            },
            format: ['Type', 'Description'],
            answers: [
                ['0', 'network unreachable'],
                ['1', 'destination unreachable'],
            ],
        },
        {
            meta: {
                title: 'Protocol numbers',
                type: 'Wireshark',
                instruction: 'What are the most common protocol numbers?',
            },
            format: ['Number', 'Protocol'],
            answers: [
                ['1', 'ICMP'],
                ['2', 'IGMP'],
                ['6', 'TCP'],
                ['17', 'UDP'],
                ['41', '6to4 tunnel'],
                ['47', 'GRE'],
                ['50', 'IPSEC (ESP)'],
                ['51', 'IPSEC (AH)'],
                ['88', 'EIGRP'],
                ['89', 'OSPF'],
                ['112', 'VRRP'],
            ],
        },
        {
            meta: {
                title: 'Port-security',
                type: 'Switching',
                instruction:
                    'Yes or No -> what happened for each action per port-security mode?',
            },
            format: ['Mode', 'Discard', 'Syslog', 'Counter', 'Error-disable'],
            answers: [
                ['protect', 'yes', 'no', 'no', 'no'],
                ['restrict', 'yes', 'yes', 'yes', 'no'],
                ['shutdown', 'yes', 'yes', 'yes', 'yes'],
            ],
        },
        {
            meta: {
                title: 'Logging',
                type: 'General',
                instruction: 'Name the different logging levels',
            },
            format: ['Level', 'Name'],
            answers: [
                ['0', 'emergencies'],
                ['1', 'alerts'],
                ['2', 'critical'],
                ['3', 'error'],
                ['4', 'warnings'],
                ['5', 'notifications'],
                ['6', 'informational'],
                ['7', 'debugging'],
            ],
        },
        {
            meta: {
                title: 'STP path cost (802.1D-1998) ',
                type: 'Switching',
                instruction:
                    'For each interface type - what is the short path cost?',
            },
            format: ['Interface', 'Cost'],
            answers: [
                ['Ethernet (10 Mbps)', '100'],
                ['FastEthernet (100 Mbps)', '19'],
                ['1 Gbps', '4'],
                ['10 Gbps', '2'],
                ['100 Gbps', '1'],
                ['1 Tbps', '1'],
                ['10 Tbps', '1'],
            ],
        },
        {
            meta: {
                title: 'STP path cost (802.1D-2004)',
                type: 'Switching',
                instruction:
                    'For each interface type - what is the long path cost?',
            },
            format: ['Interface', 'Cost'],
            answers: [
                ['Ethernet (10 Mbps)', '2000000'],
                ['FastEthernet (100 Mbps)', '200000'],
                ['1 Gbps', '20000'],
                ['10 Gbps', '2000'],
                ['100 Gbps', '200'],
                ['1 Tbps', '20'],
                ['10 Tbps', '2'],
            ],
        },
        {
            meta: {
                title: 'EIGRP named mode',
                type: 'Routing',
                instruction:
                    'What are the three sub-modes of EIGRP named mode?',
            },
            format: ['number', 'Sub-mode'],
            answers: [
                ['1', 'Address family'],
                ['2', 'AF interface'],
                ['3', 'AF topology base'],
            ],
        },
        {
            meta: {
                title: 'EIGRP named AF sub-mode',
                type: 'Routing',
                instruction:
                    'What features are found in EIGRP named sub-mode AF?',
            },
            format: ['number', 'Feature'],
            answers: [
                ['1', 'network'],
                ['2', 'stub'],
                ['3', 'router-id'],
            ],
        },
        {
            meta: {
                title: 'EIGRP named AF int sub-mode',
                type: 'Routing',
                instruction:
                    'What features are found in EIGRP named sub-mode AF int?',
            },
            format: ['number', 'Feature'],
            answers: [
                ['1', 'bandwidth & delay'],
                ['2', 'authentication'],
                ['3', 'passive-interface'],
                ['4', 'split-horizon'],
            ],
        },
        {
            meta: {
                title: 'EIGRP named AF tb sub-mode',
                type: 'Routing',
                instruction:
                    'What features are found in EIGRP named sub-mode AF tb?',
            },
            format: ['number', 'Feature'],
            answers: [
                ['1', 'variance'],
                ['2', 'max-paths'],
                ['3', 'redistribute'],
                ['4', 'auto-summary'],
            ],
        },
        {
            meta: {
                title: 'IPv6 well-known addresses',
                type: 'General',
                instruction: 'What are some well-known IPv6 addresses?',
            },
            format: ['purpose', 'IPv6'],
            answers: [
                ['All IPv6 nodes', 'FF02::1'],
                ['All IPv6 routers', 'FF02::2'],
                ['All OSPF routers', 'FF02::5'],
                ['OSPF all DR routers', 'FF02::6'],
                ['RIPv2', 'FF02::9'],
                ['EIGRP', 'FF02::A'],
                ['DHCP relay', 'FF02::1:2'],
                ['DHCP servers (site scope)', 'FF05::1:3'],
                ['All NTP servers', 'FF05::101'],
            ],
        },
        {
            meta: {
                title: 'IPv4 well-known addresses',
                type: 'General',
                instruction: 'What are some well-known IPv4 addresses?',
            },
            format: ['purpose', 'IPv4'],
            answers: [
                ['All IPv4 nodes', 'Subnet broadcast address'],
                ['All OSPF routers', '224.0.0.5'],
                ['OSPF all DR routers', '224.0.0.6'],
                ['RIPv2', '224.0.0.9'],
                ['EIGRP', '224.0.0.10'],
                ['LDP hello', '224.0.0.2'],
            ],
        },
        {
            meta: {
                title: 'Maximum integer values',
                type: 'General',
                instruction: 'What are the inifinity values of the following?',
            },
            format: ['technology', 'infinity'],
            answers: [
                ['EIGRP infinity', '2^32-1'],
                ['RIP infinity', '16'],
                ['BGP weight', '2^16-1'],
                ['BGP loc pref', '2^32-1'],
                ['BGP MED', '2^32-1'],
                ['EVN tag', '2^12-2'],
            ],
        },
        {
            meta: {
                title: 'IPv6 address types',
                type: 'General',
                instruction: 'What prefix belongs to each IPv6 address type?',
            },
            format: ['type', 'prefix'],
            answers: [
                ['Global unicast', '2000::/3'],
                ['Unique local', 'FC00::/7'],
                ['Link-local', 'FE80::/10'],
                ['Site local', 'FEC0::/10'],
                ['Unspecified', '::/128'],
                ['Loopback', '::1/128'],
                [
                    'Solicited node multicast',
                    'FF02::1:FF/104 (last 6 hex from link local IPv6)',
                ],
            ],
        },
    ],
    currentQuestionInputOrDiv: [],
    input: [],
    currentQuestionColours: [],
};

// export const obj2: IFile = {
//     {"name":"DB_8jan2022.csv","currentQuestion":0,"questions":[{"meta":{"title":"Titel","type":"Type","instruction":"Instruction"},"format":["Format"],"answers":[["Answers"]]},{"meta":{"title":"Binary","type":"General","instruction":"How many numbers fit in the binary space?"},"format":["Number","Power2"],"answers":[["1","2"],["2","4"],["3","8"],["4","16"],["5","32"],["6","64"],["7","128"],["8","256"],["9","512"],["10","1024"],["11","2048"],["12","4096"],["13","8192"],["14","16384"],["15","32768"],["16","65536"]]},{"meta":{"title":"Subnets","type":"General","instruction":"How many hosts are available in each subnet?"},"format":["Slash","Hosts"],"answers":[["/30","2"],["/29","6"],["/28","14"],["/27","30"],["/26","62"],["/25","126"],["/24","254"],["/23","510"],["/22","1022"],["/21","2046"],["/20","4094"]]},{"meta":{"title":"MPLS","type":"Header","instruction":"What are the header items and how many bits are they?"},"format":["Label","Bits"],"answers":[["total","32"],["label","20"],["traffic class","3"],["bottom of stack","1"],["time to live","8"]]},{"meta":{"title":"Administrative distance","type":"Routing","instruction":"What routing type has the follow AD?"},"format":["AD","Type"],"answers":[["0","directly connected"],["1","static"],["2","NDP"],["5","EIGRP summary route"],["20","eBGP"],["90","EIGRP internal"],["110","OSPF"],["115","IS-IS"],["120","RIP"],["170","EIGRP external"],["200","iBGP"],["254","DHCP"],["255","unknown"]]},{"meta":{"title":"Well known port numbers","type":"General","instruction":"What are the correct port, transport, protocol combinations?"},"format":["Port","Transport","Protocol"],"answers":[["22","TCP","SSH"],["23","TCP","Telnet"]]},{"meta":{"title":"VPNv4","type":"Header","instruction":"What are the header items and how many bits are they?"},"format":["Label","Bits"],"answers":[["total","96"],["route distinguisher","64"],["ipv4 prefix","32"]]},{"meta":{"title":"BGP 2-byte ASN numbers ","type":"Routing","instruction":"What are the BGP 2-byte ASN number ranges"},"format":["Type","Start@-Stop@"],"answers":[["reserverd","0"],["public","1-64495"],["transition to 4-byte ASN","23456"],["documentation","64496-64511"],["private","64512-65534"],["reserver","65535"]]},{"meta":{"title":"OSI model","type":"General","instruction":"What are the layers of the OSI model?"},"format":["Layer","Name"],"answers":[["1","Pysical"],["2","Data-Link"],["3","Network"],["4","Transport"],["5","Session"],["6","Presentation"],["7","Application"]]},{"meta":{"title":"TCP/IP model","type":"General","instruction":"What are the layers of the TCP/IP model?"},"format":["Layer","Name"],"answers":[["1","Pysical"],["2","Data-Link"],["3","Network"],["4","Transport"],["5","Application"]]},{"meta":{"title":"Protocol data units","type":"General","instruction":"What is the PDU name at each of these layers of the OSI model?"},"format":["Layer","Name"],"answers":[["1","Bits"],["2","Frames"],["3","Packets"],["4","Segments"],["5-7","Data"]]},{"meta":{"title":"Banners","type":"General","instruction":"What are the different types of banners in Cisco IOS?"},"format":["Name"],"answers":[["MOTD"],["Login"],["Exec"],["Incoming"]]},{"meta":{"title":"Troubleshoot link / protocol state","type":"Switching","instruction":"What does the Link / Protocol state of an interface tell you?"},"format":["Look at","Link","Protocol"],"answers":[["CLI shut","Admin down","down"],["L1","down","down"],["L2","up","down"],["L3","up","up"]]},{"meta":{"title":"ICMP types","type":"Wireshark","instruction":"What are the moest common ICMP types?"},"format":["Type","Description"],"answers":[["0","echo reply"],["3","destination unreachable"],["5","redirect"],["8","icmp echo request"]]},{"meta":{"title":"ICMP codes","type":"Wireshark","instruction":"What are the moet common ICMP codes?"},"format":["Type","Description"],"answers":[["0","network unreachable"],["1","destination unreachable"]]},{"meta":{"title":"Protocol numbers","type":"Wireshark","instruction":"What are the most common protocol numbers?"},"format":["Number","Protocol"],"answers":[["1","ICMP"],["2","IGMP"],["6","TCP"],["17","UDP"],["41","6to4 tunnel"],["47","GRE"],["50","IPSEC (ESP)"],["51","IPSEC (AH)"],["88","EIGRP"],["89","OSPF"],["112","VRRP"]]},{"meta":{"title":"Port-security","type":"Switching","instruction":"Yes or No -> what happened for each action per port-security mode?"},"format":["Mode","Discard","Syslog","Counter","Error-disable"],"answers":[["protect","yes","no","no","no"],["restrict","yes","yes","yes","no"],["shutdown","yes","yes","yes","yes"]]},{"meta":{"title":"Logging","type":"General","instruction":"Name the different logging levels"},"format":["Level","Name"],"answers":[["0","emergencies"],["1","alerts"],["2","critical"],["3","error"],["4","warnings"],["5","notifications"],["6","informational"],["7","debugging"]]},{"meta":{"title":"STP path cost (802.1D-1998) ","type":"Switching","instruction":"For each interface type - what is the short path cost?"},"format":["Interface","Cost"],"answers":[["Ethernet (10 Mbps)","100"],["FastEthernet (100 Mbps)","19"],["1 Gbps","4"],["10 Gbps","2"],["100 Gbps","1"],["1 Tbps","1"],["10 Tbps","1"]]},{"meta":{"title":"STP path cost (802.1D-2004)","type":"Switching","instruction":"For each interface type - what is the long path cost?"},"format":["Interface","Cost"],"answers":[["Ethernet (10 Mbps)","2000000"],["FastEthernet (100 Mbps)","200000"],["1 Gbps","20000"],["10 Gbps","2000"],["100 Gbps","200"],["1 Tbps","20"],["10 Tbps","2"]]},{"meta":{"title":"EIGRP named mode","type":"Routing","instruction":"What are the three sub-modes of EIGRP named mode?"},"format":["number","Sub-mode"],"answers":[["1","Address family"],["2","AF interface"],["3","AF topology base"]]},{"meta":{"title":"EIGRP named AF sub-mode","type":"Routing","instruction":"What features are found in EIGRP named sub-mode AF?"},"format":["number","Feature"],"answers":[["1","network"],["2","stub"],["3","router-id"]]},{"meta":{"title":"EIGRP named AF int sub-mode","type":"Routing","instruction":"What features are found in EIGRP named sub-mode AF int?"},"format":["number","Feature"],"answers":[["1","bandwidth & delay"],["2","authentication"],["3","passive-interface"],["4","split-horizon"]]},{"meta":{"title":"EIGRP named AF tb sub-mode","type":"Routing","instruction":"What features are found in EIGRP named sub-mode AF tb?"},"format":["number","Feature"],"answers":[["1","variance"],["2","max-paths"],["3","redistribute"],["4","auto-summary"]]},{"meta":{"title":"IPv6 well-known addresses","type":"General","instruction":"What are some well-known IPv6 addresses?"},"format":["purpose","IPv6"],"answers":[["All IPv6 nodes","FF02::1"],["All IPv6 routers","FF02::2"],["All OSPF routers","FF02::5"],["OSPF all DR routers","FF02::6"],["RIPv2","FF02::9"],["EIGRP","FF02::A"],["DHCP relay","FF02::1:2"],["DHCP servers (site scope)","FF05::1:3"],["All NTP servers","FF05::101"]]},{"meta":{"title":"IPv4 well-known addresses","type":"General","instruction":"What are some well-known IPv4 addresses?"},"format":["purpose","IPv4"],"answers":[["All IPv4 nodes","Subnet broadcast address"],["All OSPF routers","224.0.0.5"],["OSPF all DR routers","224.0.0.6"],["RIPv2","224.0.0.9"],["EIGRP","224.0.0.10"],["LDP hello","224.0.0.2"]]},{"meta":{"title":"Maximum integer values","type":"General","instruction":"What are the inifinity values of the following?"},"format":["technology","infinity"],"answers":[["EIGRP infinity","2^32-1"],["RIP infinity","16"],["BGP weight","2^16-1"],["BGP loc pref","2^32-1"],["BGP MED","2^32-1"],["EVN tag","2^12-2"]]},{"meta":{"title":"IPv6 address types","type":"General","instruction":"What prefix belongs to each IPv6 address type?"},"format":["type","prefix"],"answers":[["Global unicast","2000::/3"],["Unique local","FC00::/7"],["Link-local","FE80::/10"],["Site local","FEC0::/10"],["Unspecified","::/128"],["Loopback","::1/128"],["Solicited node multicast","FF02::1:FF/104 (last 6 hex from link local IPv6)"]]}],"currentQuestionInputOrDiv":[],"input":[]}
// }
