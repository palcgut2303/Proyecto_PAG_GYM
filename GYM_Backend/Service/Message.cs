using GYM_DTOs;
using Microsoft.Extensions.Options;
using System.Net.Mail;

namespace GYM_Backend.Service
{
    public class Message : IMessage
    {

        public GmailSettings _gmailSettings { get; set; }

        public Message(IOptions<GmailSettings> gmailSettings)
        {
            _gmailSettings = gmailSettings.Value;
        }

        public ResponseAPI<string> SendEmail(SendEmailRequest model)
        {
            try
            {
                var fromEmail = _gmailSettings.Username;
                var fromPW = _gmailSettings.Password;

                var message = new MailMessage();
                message.From = new MailAddress(fromEmail);
                message.Subject = model.Subject;
                message.To.Add(new MailAddress(model.To));
                message.Body = model.Body;
                message.IsBodyHtml = true;

                var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = _gmailSettings.Port,
                    Credentials = new System.Net.NetworkCredential(fromEmail, fromPW),
                    EnableSsl = true
                };

                smtpClient.Send(message);

                return new ResponseAPI<string>
                {
                    EsCorrecto = true,
                    Mensaje = "Correo enviado correctamente"
                };

            }
            catch (System.Exception ex)
            {
                return new ResponseAPI<string>
                {
                    EsCorrecto = false,
                    Mensaje = ex.Message
                };
            }
        }
        public string RandomString()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[6];
            var random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            var finalString = new String(stringChars);

            return finalString;
        }




    }
}
