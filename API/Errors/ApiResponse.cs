
namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message)
        {
            StatusCode = statusCode;
            Message = message;
        }

        public int StatusCode { get; set; }

        public string Message { get; set; }
    }
}
