
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: true, // true
      actions: ['lead'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://admin:password@ds041367.mongolab.com:41367/development',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MEAN Lean Startup Machine - Development'
    },
    facebook: {
      clientID: "455818271176818",
      clientSecret: "db6c579d1fcdc9a3980bc4aade0e3aaf",
      callbackURL: "http://local.meanstack.com:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
  },
  test: {
    db: 'mongodb://admin:password@ds041367.mongolab.com:41367/development',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MEAN Lean Startup Machine - Test'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    }
  },
  production: {
    db: 'mongodb://admin:password@ds041367.mongolab.com:41367/development',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MEAN Lean Startup Machine'
    },
    facebook: {
      clientID: "455818271176818",
      clientSecret: "db6c579d1fcdc9a3980bc4aade0e3aaf",
      callbackURL: "http://meanstack.heroku.com/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    }
  }
}
