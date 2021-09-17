using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Not good, You have made a bad request, Please don't try bad one",
                401 => "You are not Authorized",
                404 => "Resource could not found, Alright",
                500 => "Internal Server Error",
                _ => null
            };
        }
    }
}