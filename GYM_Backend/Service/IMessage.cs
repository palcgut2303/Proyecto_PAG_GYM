﻿using GYM_DTOs;

namespace GYM_Backend.Service
{
    public interface IMessage
    {
        string RandomString();
        ResponseAPI<string> SendEmail(SendEmailRequest model);
    }
}
