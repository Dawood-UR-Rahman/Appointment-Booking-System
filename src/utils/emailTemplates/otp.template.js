// utils/emailTemplates/otp.template.js
module.exports = (otp) => `
  <div style="font-family: Arial">
    <h2>Verification Code</h2>
    <p>Your OTP is:</p>
    <h1>${otp}</h1>
    <p>This code expires in 5 minutes.</p>
  </div>
`;
