module.exports = {
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS,
    },
      tls: {
    rejectUnauthorized: false // ✅ FIX
  },
    from:`Zin Solutions <${process.env.MAIL_FROM}>`
};