"use server";

// IMPORT nodemailer
const nodemailer = require("nodemailer");

export async function messageClient(clientInfo: any | unknown) {
  try {
    // SMTP config
    let transporter = await nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      auth: {
        user: "info@robinsonagmarketinghub.com",
        pass: "Schumacher@001",
      },
    });

    // send mail
    await transporter.sendMail({
      from: "info@robinsonagmarketinghub.com",
      to: "info@robinsonagmarketinghub.com",
      subject: "Client Subscription",
      html: `
            <h4>Name</h4>
            <p>${clientInfo.firstname} ${clientInfo.lastname}</p>

            <hr/>

            <h4>Phone Number</h4>
            <p>${clientInfo.number}</p>

            <hr/>

            <h4>Email</h4>
            <p>${clientInfo.email}</p>

            <hr/>

            <h4>Plan</h4>
            <p>${clientInfo.plan}</p>

            <h4>Product</h4>
            <p>${clientInfo.product}</p>
  `,
    });

    return "success";
  } catch (error) {
    return error;
  }
}
