// express app
const express = require('express');
const app = express();
const port = 3000;
// body parser
const bodyParser = require('body-parser');
// cors
const cors = require('cors');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

// serve static files
app.use(express.static('public'));

// eslint-disable-next-line no-unused-vars
let envs = [
    {
        id: 1,
        name: 'Production',
        description: 'Production environment',
        icon: 'mdi-cloud-check-outline',
        hosts: [
            {
                name: 'Host 1',
                description: 'Host 1 description',
                icon: 'mdi-server',
                status: 'online',
                cost: '$10.00',
                services: [1]
            },
            {
                name: 'Host 2',
                description: 'Host 2 description',
                icon: 'mdi-server',
                status: 'online',
                cost: '$5.60',
                services: [2]
            },
            {
                name: 'Host 3',
                description: 'Host 3 description',
                icon: 'mdi-server',
                status: 'offline',
                cost: '$0.00',
                services: [3]
            },
        ],
        services: [
            {
                id: 1,
                name: 'Service 1',
                description: 'Service 1 description',
                uptime: '13d 12h 06m',
                avgCpu: '32%',
                avgMem: '2,45/4 GB',
                avgNetwork: '300 mb/s',
                peakCpu: '80%',
                peakMem: '3,45/4 GB',
                peakNetwork: '500 mb/s',
                recentLogs: "lorem ipsum dolor sit amet",
                version: '1.2.0',
                lastSnapshot: '2020.10.10 10:10:10',
                load: {
                    cpu: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    network: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    memory: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    }
                },
                options: {
                    ports: [
                        {
                            name: 'Port 1',
                            description: 'Port 1 description',
                            value: 8080
                        },
                        {
                            name: 'Port 2',
                            description: 'Port 2 description',
                            value: 8081
                        }
                    ],
                    env_vars: [
                        {
                            name: 'Env Var 1',
                            description: 'Env Var 1 description',
                            value: 'Env Var 1 value'
                        },
                        {
                            name: 'Env Var 2',
                            description: 'Env Var 2 description',
                            value: 'Env Var 2 value'
                        }
                    ]
                }
            },
            {
                id: 2,
                name: 'Service 2',
                description: 'Service 2 description',
                uptime: '10d 20h 04m',
                avgCpu: '50%',
                avgMem: '2,45/4 GB',
                avgNetwork: '300 mb/s',
                peakCpu: '80%',
                peakMem: '3,45/4 GB',
                peakNetwork: '500 mb/s',
                recentLogs: "lorem ipsum dolor sit amet",
                version: '1.0.0',
                lastSnapshot: '2020.10.10 10:10:10',
                load: {
                    cpu: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    network: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    memory: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    }
                },
                options: {
                    ports: [
                        {
                            name: 'Port 1',
                            description: 'Port 1 description',
                            value: 8080
                        },
                        {
                            name: 'Port 2',
                            description: 'Port 2 description',
                            value: 8081
                        }
                    ],
                    env_vars: [
                        {
                            name: 'Env Var 1',
                            description: 'Env Var 1 description',
                            value: 'Env Var 1 value'
                        },
                        {
                            name: 'Env Var 2',
                            description: 'Env Var 2 description',
                            value: 'Env Var 2 value'
                        }
                    ]
                }
            },
            {
                id: 3,
                name: 'Service 3',
                description: 'Service 3 description',
                uptime: '10d 20h 04m',
                avgCpu: '50%',
                avgMem: '2,45/4 GB',
                avgNetwork: '300 mb/s',
                peakCpu: '80%',
                peakMem: '3,45/4 GB',
                peakNetwork: '500 mb/s',
                recentLogs: "lorem ipsum dolor sit amet",
                version: '1.0.0',
                lastSnapshot: '2020.10.10 10:10:10',
                load: {
                    cpu: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    network: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    memory: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    }
                },
                options: {
                    ports: [
                        {
                            name: 'Port 1',
                            description: 'Port 1 description',
                            value: 8080
                        },
                        {
                            name: 'Port 2',
                            description: 'Port 2 description',
                            value: 8081
                        }
                    ],
                    env_vars: [
                        {
                            name: 'Env Var 1',
                            description: 'Env Var 1 description',
                            value: 'Env Var 1 value'
                        },
                        {
                            name: 'Env Var 2',
                            description: 'Env Var 2 description',
                            value: 'Env Var 2 value'
                        }
                    ]
                }
            }
        ],
        dependencies: {
            1: [
                2
            ],
            3: []
        }
    },
    {
        id: 2,
        name: 'Development',
        description: 'Development environment',
        icon: 'mdi-cloud-sync-outline',
        hosts: [
            {
                name: 'Host 1',
                description: 'Host 1 description',
                icon: 'mdi-server',
                status: 'online',
                services: [4]
            },
            {
                name: 'Host 2',
                description: 'Host 2 description',
                icon: 'mdi-server',
                status: 'online',
                services: [5]
            },
        ],
        services: [
            {
                id: 4,
                name: 'Service 1',
                description: 'Service 1 description',
                uptime: '10d 20h 04m',
                avgCpu: '50%',
                avgMem: '2,45/4 GB',
                avgNetwork: '300 mb/s',
                peakCpu: '80%',
                peakMem: '3,45/4 GB',
                peakNetwork: '500 mb/s',
                recentLogs: "lorem ipsum dolor sit amet",
                version: '1.0.0',
                lastSnapshot: '2020.10.10 10:10:10',
                load: {
                    cpu: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    network: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    memory: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    }
                },
                options: {
                    ports: [
                        {
                            name: 'Port 1',
                            description: 'Port 1 description',
                            value: 8080
                        },
                        {
                            name: 'Port 2',
                            description: 'Port 2 description',
                            value: 8081
                        }
                    ],
                    env_vars: [
                        {
                            name: 'Env Var 1',
                            description: 'Env Var 1 description',
                            value: 'Env Var 1 value'
                        },
                        {
                            name: 'Env Var 2',
                            description: 'Env Var 2 description',
                            value: 'Env Var 2 value'
                        }
                    ]
                }
            },
            {
                id: 5,
                name: 'Service 2',
                description: 'Service 2 description',
                uptime: '10d 20h 04m',
                avgCpu: '50%',
                avgMem: '2,45/4 GB',
                avgNetwork: '300 mb/s',
                peakCpu: '80%',
                peakMem: '3,45/4 GB',
                peakNetwork: '500 mb/s',
                recentLogs: "lorem ipsum dolor sit amet",
                version: '1.0.0',
                lastSnapshot: '2020.10.10 10:10:10',
                load: {
                    cpu: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    network: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    },
                    memory: {
                        labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
                        dataset: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                    }
                },
                options: {
                    ports: [
                        {
                            name: 'Port 1',
                            description: 'Port 1 description',
                            value: 8080
                        },
                        {
                            name: 'Port 2',
                            description: 'Port 2 description',
                            value: 8081
                        }
                    ],
                    env_vars: [
                        {
                            name: 'Env Var 1',
                            description: 'Env Var 1 description',
                            value: 'Env Var 1 value'
                        },
                        {
                            name: 'Env Var 2',
                            description: 'Env Var 2 description',
                            value: 'Env Var 2 value'
                        }
                    ]
                }
            }
        ],
    }
]

app.post('/login', (req, res) => {
    // get username and password from request body
    const { email, password } = req.body;

    if (email === 'ancore' && password === '123') {
        res.status(200).json({
            id: 1,
            name: 'Andrey Grechko',
            login: 'ancore'
        });
    }
    else {
        res.status(401).send('Unauthorized');
    }
})

app.get("/getUserEnvironments", (req, res) => {
    setTimeout(() => {
        res.status(200).json(envs);
    }, 2000);
})

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
