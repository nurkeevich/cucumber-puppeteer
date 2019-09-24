const { Given } = require('cucumber');
const puppeteer = require('puppeteer');
const openUrl = require('../support/action/openUrl');

const url = 'http://localhost:4208/energy/loggedout';

Given('user at login page', async function () {
    await openUrl.call(this, url);
    const browser = puppeteer.launch();

});