export const projects = {
  python: [
    {
      title: 'Paper-Trader Back-End',
      description: 'Built with Flask, PostgreSQL, SocketIO, and the Alpaca Trading API. Allows for users to make accounts and make stocks trades with paper money.',
      github: 'https://github.com/rdawson46/paper-trading',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'SocketIO']
    },
    {
      title: 'Data Mine',
      description: 'Runs with scheduled events to gather stock data, make ML models, makes predictions, and manages a portfolio. Then uses a Flask app to host a dashboard to track progress.',
      github: 'https://github.com/rdawson46/data-mine',
      technologies: ['Python', 'Flask', 'Machine Learning']
    },
    {
      title: 'Pi-Daily Email',
      description: 'Uses multiple APIs to format an email every day to send useful information to a list of users.',
      github: 'https://github.com/rdawson46/pi-daily-email',
      technologies: ['Python', 'API']
    },
    {
      title: 'Social Media App',
      description: 'Built using Django. Users can make accounts, post, follow users, see global feeds, and followed feed.',
      github: 'https://github.com/rdawson46/social-media',
      technologies: ['Python', 'Django']
    },
    {
      title: 'Chat App',
      description: 'Uses a Flask app and SocketIO for users to send group messages in real time.',
      github: 'https://github.com/rdawson46/chatApp',
      technologies: ['Python', 'Flask', 'SocketIO']
    }
  ],
  javascript: [
    {
      title: 'Paper-Trader Front-End',
      description: 'Front end was built using SocketIO to update prices when the user interacts with the app. Used JQuery on some pages to simplify development process.',
      github: 'https://github.com/rdawson46/paper-trading',
      technologies: ['JavaScript', 'SocketIO', 'jQuery']
    },
    {
      title: 'Blockchain Coin-Flip',
      description: 'Project built with Vue.JS. Allows for users to sync MetaMask wallets and then wager on a coin flip. It is a winner take all. Smart contract was made with Solidity.',
      github: 'https://github.com/rdawson46/blockchain-coin',
      technologies: ['JavaScript', 'Vue.js', 'Solidity']
    },
    {
      title: 'Chat App',
      description: 'Live time chat app. Front end uses SocketIO to handle all events. Then uses vanilla JS to manipulate the DOM.',
      github: 'https://github.com/rdawson46/chatApp',
      technologies: ['JavaScript', 'SocketIO']
    },
    {
      title: 'This Website',
      description: 'This site is built using Vue.JS and hosted on Firebase and utilizes other Firebase tools.',
      github: 'https://github.com/rdawson46/vue-portfolio',
      technologies: ['JavaScript', 'Vue.js', 'Firebase']
    }
  ],
  go: [
    {
      title: 'LLM Dashboard',
      description: 'LLM Application with a Go server and Vue.js front end. Enables users to interact with a local LLM and leverage tools, such as web search and python code execution.',
      github: 'https://github.com/rdawson46/dashboard',
      technologies: ['Go', 'SQLite', 'Ollama', 'JWT']
    },
    {
      title: 'Terminal Stock Ticker',
      description: 'Application written in Go that will display stock information in the terminal, including a pricing chart. Allows the user to write a custom config to display any stock they want.',
      github: 'https://github.com/rdawson46/musical-waffle',
      technologies: ['Go', 'Bubble Tea']
    },
    {
      title: 'Image Conversion',
      description: 'Simple HTTP server with a Vue.js front-end that allows users to upload an image and convert them into ASCII art.',
      github: 'https://github.com/rdawson46/image-conversion',
      technologies: ['Go', 'Vue']
    }
  ],
  others: [
    {
      title: 'Editor',
      description: 'Vim like editor written in Rust. Made the UI with Ratatui and wrote the rest from scratch. Currently adding Vim motions.',
      github: 'https://github.com/crooksryan/editor',
      technologies: ['Rust', 'Ratatui']
    },
    {
      title: 'Hover Mark',
      description: 'Neovim plugin written in Lua. Helps display marks in Neovim buffers to help make using marks easier to use.',
      github: 'https://github.com/rdawson46/hover_mark.nvim',
      technologies: ['Lua', 'Neovim']
    },
    {
      title: 'Rust Huffman',
      description: 'Huffman encoding implemented in Rust.',
      github: 'https://github.com/rdawson46/rust-huffman',
      technologies: ['Rust']
    },
  ]
};
