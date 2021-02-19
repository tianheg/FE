/* 
 * @file app.js
*/

const Express = require('express');
const app = new Express();
const fs = require('fs');
const path = require('path');
const os = require('os');

const port = 8080;

const generateHtml = (content)