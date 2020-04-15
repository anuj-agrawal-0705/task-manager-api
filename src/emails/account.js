const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'anujagrawal751997@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let us know how you get along with the app`
    })
}

const sendGoodbyeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from:'anujagrawal751997@gmail.com',
        subject:'Thank you for being the part of our group',
        text:'We would like to know the reason why you are deleting the account, and do write us about how can we make our service better'

    }).then(()=>{

    }).catch((e)=>{
        console.log(e.response.body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}