const nodemailer = require('nodemailer');
const emailConfig = require('../config/email.config');

const transporter = nodemailer.createTransport(emailConfig);

exports.sendEmail = async ({
  to,
  subject,
  html,
  text,
  attachments = []
}) => {
  return transporter.sendMail({
    from: emailConfig.from,
    to,
    subject,
    text,
    html,
    attachments
  });
};
