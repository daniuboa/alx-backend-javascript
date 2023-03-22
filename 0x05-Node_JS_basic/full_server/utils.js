import fs from 'fs'

// eslint-disable-next-line import /prefer-default-export
export const readDatabase = (filePath) => new Promise((resolve, reject) => {
	fs
