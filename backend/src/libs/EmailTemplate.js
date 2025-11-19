export const generateEmailTemplate = (type, data = {}) => {
  switch (type) {
    case "welcome":
      return {
        subject: "Welcome to CodeClub — Question of the Day",
        html: `
          <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; background:#0b1220; padding:20px; color:#e6eef8; border-radius:8px;">
            <h2 style="text-align:center; margin-bottom:8px;">Welcome to CodeClub, ${data.name || "Coder"}!</h2>
            <p style="margin:8px 0;">Thanks for joining <strong>CodeClub</strong> — your place for the daily coding challenge.</p>
            <p style="margin:8px 0;">We’ll send you the <strong>Question of the Day (QOTD)</strong>, leaderboards updates, and contest news.</p>
            ${data.questionTitle ? `<p style="margin:8px 0;"><strong>Today's QOTD:</strong> ${data.questionTitle}</p>` : ""}
            ${data.link ? `<p style="margin:8px 0;">Start solving: <a href="${data.link}" style="color:#9bd1ff;">Open QOTD</a></p>` : ""}
            <hr style="border-color:#142033; margin:16px 0;">
            <p style="font-size:12px; color:#9fb4cc;">If you didn’t create this account, ignore this email or contact support.</p>
          </div>
        `,
      };

    case "otp":
      return {
        subject: "Your CodeClub Verification OTP",
        html: `
          <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; background:#0b1220; padding:20px; color:#e6eef8; border-radius:8px;">
            <h2 style="text-align:center; margin-bottom:8px;">Verify Your CodeClub Account</h2>
            <p style="margin:8px 0;">Hello ${data.name || "Coder"},</p>
            <p style="margin:8px 0;">Use the One-Time Password below to verify your email and start solving the Question of the Day:</p>
            <h1 style="text-align:center; background:#081623; padding:12px; border-radius:8px; color:#7efc9b; letter-spacing:4px;">${data.otp}</h1>
            <p style="margin:8px 0;">This code expires in <strong>${data.expires || "24 hours"}</strong>.</p>
            <hr style="border-color:#142033; margin:16px 0;">
            <p style="font-size:12px; color:#9fb4cc;">If you didn't request this, ignore the email.</p>
          </div>
        `,
      };

    case "reset-password":
      return {
        subject: "CodeClub Password Reset — OTP Inside",
        html: `
          <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; background:#0b1220; padding:20px; color:#e6eef8; border-radius:8px;">
            <h2 style="text-align:center; margin-bottom:8px;">Password Reset Request</h2>
            <p style="margin:8px 0;">We received a request to reset the password for your CodeClub account (${data.email || "your email"}).</p>
            <p style="margin:8px 0;">Enter the OTP below to set a new password:</p>
            <h1 style="text-align:center; background:#081623; padding:12px; border-radius:8px; color:#ffd86b; letter-spacing:4px;">${data.otp}</h1>
            <p style="margin:8px 0;">This code expires in <strong>${data.expires || "10 minutes"}</strong>.</p>
            <p style="margin:8px 0;">If you didn't request this, you can ignore this email and your password will remain unchanged.</p>
            <hr style="border-color:#142033; margin:16px 0;">
            <p style="font-size:12px; color:#9fb4cc;">Need help? Reply to this email or visit the CodeClub support page.</p>
          </div>
        `,
      };

    case "qotd-notification":
      return {
        subject: `Today's QOTD — ${data.questionTitle || "New challenge"} on CodeClub`,
        html: `
          <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; background:#0b1220; padding:20px; color:#e6eef8; border-radius:8px;">
            <h2 style="text-align:center; margin-bottom:8px;">Question of the Day</h2>
            <p style="margin:8px 0;">Hi ${data.name || "Coder"},</p>
            <p style="margin:8px 0;"><strong>${data.questionTitle || "A new problem"} </strong></p>
            ${data.description ? `<p style="margin:8px 0;">${data.description}</p>` : ""}
            ${data.link ? `<p style="margin:12px 0;"><a href="${data.link}" style="color:#9bd1ff;">Solve it now on CodeClub</a></p>` : ""}
            <hr style="border-color:#142033; margin:16px 0;">
            <p style="font-size:12px; color:#9fb4cc;">Good luck — post your solution to earn points on the leaderboard!</p>
          </div>
        `,
      };

    default:
      return {
        subject: "Notification from CodeClub",
        html: `
          <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; background:#0b1220; padding:20px; color:#e6eef8; border-radius:8px;">
            <p style="margin:0;">You have a new notification from <strong>CodeClub</strong>.</p>
          </div>
        `,
      };
  }
};
