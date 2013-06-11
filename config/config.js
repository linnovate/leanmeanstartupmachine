
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      postmarkKey: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  amos: {
    db: 'mongodb://admin:password@ds027338.mongolab.com:27338/israelhayom',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ישראל היום - מהדורה דיגיטלית - Amos'
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
    },
  },
  development: {
    db: 'mongodb://admin:password@ds027338.mongolab.com:27338/israelhayom',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ישראל היום - מהדורה דיגיטלית - Development'
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
    db: 'mongodb://admin:password@ds027338.mongolab.com:27338/israelhayom',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ישראל היום - מהדורה דיגיטלית - Test'
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
    db: 'mongodb://admin:password@ds027338.mongolab.com:27338/israelhayom',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'ישראל היום - מהדורה דיגיטלית'
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
