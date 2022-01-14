# SlideSwiper

Simple nodejs sever swiping slides of your presentation

# Usage

to started the server just run `slideswiper` and you will see a with QRCode scan it then you will be able to control your slides

to set the server port define a Environment Variables named `PORT`

# Installation

1. install [node](https://nodejs.org/) [java](https://java.com/en/download/) for your operating system
2. clone the repo using `git clone https://github.com/ChaotenHG/SlideSwiper/`
3. navigated in to the directory with `cd SlideSwiper`
4. run `npm install` or `yarn install` to install the dependency
5. install globaly using `npm i -g .`

## ChromeOS ONLY

6. set your localip manually using `export IP=<yourlocalip>` [you can find your IP](https://chromeunboxed.com/how-to-find-your-chromebooks-ip-and-mac-address/)
7. enable port forward for `3000` using [here](https://chromeos.dev/en/web-environment/port-forwarding)
8. install your presentation tool using the linux container for example `sudo apt install firefox`
