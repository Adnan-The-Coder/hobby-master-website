export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Use this code to verify your email:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{VERIFY_CODE}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Electroplix</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately at Official.Electroplix@gmail.com</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Electroplix</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Electroplix</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;


export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Electroplix</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header-image {
            width: 100%;
            height: auto;
        }
        .content {
            padding: 20px;
        }
        h1 {
            color: #007BFF;
            font-size: 24px;
            margin-top: 0;
        }
        h2 {
            font-size: 20px;
            margin: 10px 0;
        }
        p {
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .cta-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer {
            padding: 10px;
            text-align: center;
            font-size: 14px;
        }
        .social-links {
            margin: 10px 0;
        }
        .social-links a {
            margin: 0 10px;
            text-decoration: none;
            color: #007BFF;
        }
        .social-links a:hover {
            text-decoration: underline;
        }
        @media (max-width: 600px) {
            .container {
                padding: 10px;
            }
            .content {
                padding: 15px;
            }
            h1 {
                font-size: 20px;
            }
            h2 {
                font-size: 18px;
            }
            p {
                font-size: 14px;
            }
            .social-links a {
                display: block;
                margin: 5px 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://mailsend-email-assets.mailtrap.io/54mrbgbp0d34org68mry2e4b5n2k.jpg" class="header-image">
        <div class="content">
            <p>Welcome <strong>{user}</strong>!</p>
            <h2>Thanks for choosing Electroplix!</h2>
            <p>We’re excited to have you join our dynamic community where innovation meets design. Get ready to unlock the secrets to building stunning websites faster than ever! 🚀</p><br>
            <p><strong>🔍 What Awaits You:</strong></p>
            <ul>
                <li><strong>Innovative Solutions:</strong> Explore our diverse range of web components and templates that empower you to create exceptional digital experiences with ease.</li>
                <li><strong>Expert Insights:</strong> Stay ahead with our cutting-edge content that covers everything from custom web development to effective digital marketing strategies.</li>
                <li><strong>Community Collaboration:</strong> Connect with fellow innovators, share your projects, and collaborate on exciting ventures to elevate your business.</li>
            </ul>
            <p>As a valued member, you’ll receive exclusive access to webinars, resources, and support to supercharge your digital journey. Let’s innovate together!</p>
            <p>If you have any questions or brilliant ideas, don’t hesitate to reach out at <a href="mailto:official.electroplix@gmail.com">official.electroplix@gmail.com</a>. We’re here to help you thrive.</p><br>
            <p>Happy Building!</p><br>
            <p>Warm regards,<br>Syed Adnan Ali<br>Founder & CEO, Electroplix</p>
        </div><br>
        <div class="footer">
            <p>Follow us on:</p>
            <div class="social-links">
                <a href="https://x.com/Electroplix_" target="_blank">X</a> |
                <a href="https://www.facebook.com/people/Electroplix/61565564645521/" target="_blank">Facebook</a> |
                <a href="https://instagram.com/electroplixofficial" target="_blank">Instagram</a>
            </div>
            <p><img src="https://www.electroplix.com/Electroplix_logo.jpeg" alt="Company Logo" style="width: 100px; height: auto; margin-top: 10px;"></p>
        </div>
    </div>
</body>
</html>
`;